#! /usr/bin/perl -w

use v5.24;
no warnings qw( experimental::smartmatch );
use strict;
use Data::Dumper::Simple;
$Data::Dumper::Useqq = 1;
$Data::Dumper::Sortkeys = 1;
$| = 1;
use Text::Glob;
use Text::Balanced qw (
extract_delimited
extract_bracketed
extract_quotelike
extract_codeblock
extract_variable
extract_tagged
extract_multiple
gen_delimited_pat
gen_extract_tagged
);


my $extractors = [
	{ Comment	=> qr/#.*\n/		},
	{ End		=> qr/\n/		},
	{ End		=> qr/;+/		},
	{ WS		=> qr/\s+/		},
	{ SetVar	=> qr/\w+(?==)/		},
	{ Var		=> qr/\$(\w+|\S)/	},
	sub { extract_variable($_[0], '')	},
	sub { extract_quotelike($_[0],'')	},
	sub { extract_codeblock($_[0],'{}','')	},
];
sub tagger($)
{
	my $o = shift;
	return $o if ref $o;
	given ($o) {
		return bless \$o, 'Var'		when /^\$(\w+|\S)$/;
		return bless \$o, 'SQString'	when /^'.*'$/s;
		return bless \$o, 'BQString'	when /^`.*`$/s;
						when (/^".*"$/s) {
			$o =~ s/\\\n//gs;
			return bless \$o, 'DQString'
		};
					when (/^<<(\w+)\n(.*\n)\1\n$/) {
			$o = "\"$2\"";
			return bless \$o, 'HDString'
		};
		bless( do{\(my $o = "<<EOF\n\$1\nEOF\n")}, '?!?!?!?!' ),

		return bless \$o, 'Word'	when /^\S+$/;
		#default { return bless \$o, '?!?!?!?!' };
		default { die "What about $o?!" };
	};
};
for my $f (qw(sub guess)) {
	my $fn = "gnu-config/config.$f";
	my $args = $fn eq 'sub'? 'alias': '';
	print <<HEAD;
// converted from $fn by $0 at ${\(scalar localtime)}
function config_$f($args) {"
HEAD
	my $indent = 1;
	sub ind() { '  ' x $indent };
	my $ind = ind;
	my %sym;
	my $line;
	my $file;
	{
		local $/ = undef;
		open SCRIPT, '<', $fn or die "$fn: $!";
		$file = <SCRIPT>;
		close SCRIPT or die "$fn: $!";
	};
	my @tokens = map { tagger $_ } extract_multiple($file, $extractors);
	print Dumper(@tokens); exit;
	while (<SCRIPT>) {
		chomp;
		if(/^[^#]*\\$/) {
			$line .= "\n$_";
		};
		given ($_) {
			when ($. == 1 and /^#!/) {
				# ignore
			};
			when (/^\s*#(.*)$/) {
				print "$ind//$1\n";
			};
			when (/^\s*$/) {
				print "\n";
			};
			when (/^\s*(\w+)=(.*)$/) {
				my $dcl = exists $sym{$1}? 'let ': '';
				print "$ind$dcl$1 = $2\n";
			};
			default {
				die "*** error: $fn: $.: Cannot parse: $_\n";
			};
		};
	};
	print "}\n";
};
