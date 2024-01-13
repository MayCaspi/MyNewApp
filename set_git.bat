:: this bat file is used to set git repository
:: to run use .\set_git.bat
:: add :: before the next row to initialize the repository
@REM exit /b

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MayCaspi/MyNewApp.git
git push -u origin main