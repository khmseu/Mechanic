#! /bin/bash

echo '# ChangeLog'
echo
git log --decorate --date=iso | \
  sed -e '/[^ ]/s,^ ,-&,' -e 's,^\(commit.*[^ ]\) *(\(.*\))$,## \2\n\n\1,g' | \
  sed -e '/^c/{N;N;s,\n, ,g}' -e 's,^commit *\(.*\) Author: *\(.*\) Date: *\(.*\),### \1 \3 \2,'
echo
