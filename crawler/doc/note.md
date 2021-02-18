
### 建立 virtual environment

```cmd
> py -3 -m venv .venv
> .venv\Scripts\activate
> python -m pip install matplotlib
> pip install <package name> --trusted-host pypi.org --trusted-host files.pythonhosted.org
> pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org
> deactivate
```

### 說找不到 pip

```cmd
> python -m ensurepip
```


### 安裝 package

```cmd
> pip install beautifulsoup4 --trusted-host pypi.org --trusted-host files.pythonhosted.org
> pip install requests2 --trusted-host pypi.org --trusted-host files.pythonhosted.org
```