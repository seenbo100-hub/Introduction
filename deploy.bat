@echo off
echo.
echo  Deploying to keita-shimbo-self-intro.surge.sh ...
echo.

copy /Y "keita-shimbo-self-intro.html" "index.html" > nul
echo  [1/2] index.html updated

surge . keita-shimbo-self-intro.surge.sh
echo.
echo  Done! https://keita-shimbo-self-intro.surge.sh
pause
