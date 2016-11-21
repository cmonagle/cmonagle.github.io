# cmonagle.github.io

Simple portfolio site running on Jekyll.
See it live at cmonagle.github.io/

## Requirements

- Jekyll
- NPM
- Gulp (globally)

## Setup environment

- Clone/download the repository
- ```npm install```
- ```gulp``` launches Jekyll server and watches directory

## Generate CV
Requires pandoc and xelatex: ```pandoc cv-print.md --latex-engine=xelatex -V geometry:margin=1cm -o cv.pdf```
