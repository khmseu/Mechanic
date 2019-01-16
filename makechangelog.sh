#! /bin/bash

echo '# ChangeLog'
git log --decorate --date=iso | \
  sed -e '/s,^[[:space:]]*$/d' -e 's,^  *,- ,' -e 's,^\(commit.*[^ ]\) *(\(.*\))$,## \2\n\1,g' | \
  sed -e '/^c/{N;N;s,\n, ,g}' -e 's,^commit *\(.*\) Author: *\(.*\) Date: *\(.*\),### [\1](https://github.com/khmseu/Mechanic/commit/\1) \3 \2,' | \
  cat
: sed -e 's,^#.*,\n&\n,'
echo
