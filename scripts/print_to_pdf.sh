#!/usr/bin/env bash

cd "$(dirname "$0")"

chromium --headless --disable-gpu --print-to-pdf=../public/test.pdf --no-pdf-header-footer http://localhost:3000/

