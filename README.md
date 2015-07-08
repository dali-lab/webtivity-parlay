# WEBDEV getting started


So you want to make a webpage. You want your own domain.  You want it all.  This is a 1 hour long tutorial to get you up and running and developing with some nice tools.  This mostly assumes that you are using a recent version of OS X, so your mileage may vary.

![](docs/img/square.png) indicates a step to do. 


##1)  Tools

* ###[atom.io](http://atom.io)

  is a great code editor, it is cross platform and looks pretty.
  <br>![](docs/img/square.png) 1.0)  install from [atom.io](http://atom.io)
  <br>![](docs/img/square.png) 1.1)  open Atom and then do: *Atom -> Install Shell Commands*

* ###[git](http://git-scm.com)  
  git is a code collaboration tool but also will allow us to use github to host our pages! If you already have git then you can skip this step.
  
  <br>![](docs/img/square.png) 1.2)  Go to [github.com](http://github.com) and create an account if you don't have one already!
  <br>![](docs/img/square.png) 1.3)  Install the github app from here: [Mac](http://mac.github.com) or [PC](http://windows.github.com).
  <br>![](docs/img/square.png) 1.4)  Run *GitHub* app, and set up with your new account.
  <br>![](docs/img/square.png) 1.5)  Go to *Preferences* -> *Advanced* and fill in your information with the same email you used for your github account and then click *Install Command Line Tools*
  ![](docs/img/github_cmd.png)

* no other tools will be necessary but for the future here's a recommended [list of DALI recommended dev tools](https://docs.google.com/document/d/1XODTyblh3NP1sxO-mObPfx5STlbD78tK0r2lmj4E8Co).

##2)  Terminal

We'll have to use some Terminal command line dark magic here.  Copy/paste is your friend.  

  <br>![](docs/img/square.png) 2.0)  Open Terminal (on Windows open Git Shell)
  <br>![](docs/img/square.png) 2.1)  ```cd ~/Desktop```
  <br>![](docs/img/square.png) 2.2)  ```git clone https://github.com/timofei7/all-the-webdev.git```
  <br>![](docs/img/square.png) 2.3)  ```cd all-the-webdev```

what this does is change directory to your Desktop, then clones the the tutorial repository there, and then you cd into that cloned repository.  For the rest of this tutorial we assume that you have a Terminal window open and that you are cd'd into the repository you just cloned.  If you get any errors in the above give a shout! 

Some more Terminal commands that are useful:

```ls -la```  will list files in current directory </br>
```pwd```  will show current directory</br>
```cd  somenewdirectory```  will change directory to *somenewdirectory*</br>
```cp source target``` will copy files</br>
```mv source target``` will move</br>


You are now ready to start webdev for real!


##3) Code

  <br>![](docs/img/square.png) 3.0)  In Terminal run:  ```atom .```

This will open the current folder into the Atom text editor. Note the folder structure.  What are you reading now is actually a [markdown](https://guides.github.com/features/mastering-markdown/) file in the **Documentation** folder. 

The main file that gets loaded for the site is **index.html**.
The file that contains the majority of css styling is in **css/main.css**.
Image assets are in **img**.
Javascripts are in **js**.

  <br>![](docs/img/square.png) 3.1) Lets view what is there already now. In Terminal:  ```python -m SimpleHTTPServer &```

![](docs/img/simpleserver.jpg)<br>
this will start a simple little webserver so you can now access the page in your browser at: [http://localhost:8000](http://localhost:8000)

*If you get an error or don't have python, never fear, for now just open **index.html** manually in your browser, this breaks for certain javascript but will work for this example.*
  
  <br>![](docs/img/square.png) 3.2) back in Atom, 

Play around and make some changes.  In particular add yourself to the team section!  Change some images.  We'll walk through this step but in particular see if you can find *(command+f)* teammates and see how to change the text and image.  To insert a new image just put a .jpg or .png in the img folder (make sure it is square) and change the ```img src=``` line. 






##4) Git










<br>

