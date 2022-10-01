## The website url :
https://pruthvirajjadhav1.github.io/Crypto-Tracker/

### This site is made using React js.
feel free to contribute
## Setup & Contribution Guidelines:

1. Fork The repository

Click on **Fork** button present on the upper-right area of the screen to create a copy of this repository to your GitHub account.


2. Clone The repository using git

```bash

git clone https://github.com/<YOUR_USERNAME>/Crypto-Tracker.git

```

-> Navigate to Crypto-Tracker repo directory

```bash

cd Crypto-Tracker

```

3. Add a reference to the original repository as upstream


```bash

git remote add upstream https://github.com/pruthvirajjadhav1.github.io/Crypto-Tracker.git

```
Verify the remotes for this repository
```bash

git remote -v

```
Output of above command will be same as this:
```bash

origin  https://github.com/<YOUR_USERNAME>/Crypto-Tracker.git (fetch)
origin  https://github.com/<YOUR_USERNAME>/Crypto-Tracker.git (push)
upstream    https://github.com/Acadmica/Crypto-Tracker.git(fetch)
upstream    https://github.com/Acadmica/Crypto-Tracker.git (push)

```

4. Update Fork Repo From Upstream(remain updated with the orignal repo).

Update your local branch to be in sync with the original repo.

```console

$ git pull upstream master

```


### Contributing & making a pull request

1. Create a new branch.

```
git checkout -b <your_branch_name>
```

2. Perform your desired changes to the code base.


3. Track your changes:heavy_check_mark: .

```
git add .
```

4. Commit your changes
```
git commit -m "Relevant message"
```

5. Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

6. To create a pull request, click on `compare and pull requests`. Please ensure that you compare your feature branch to the desired branch `master` of the repo to make a PR.


7. Add an appropriate title and relevant description to your pull request explaining your changes and efforts done.
    And edit the PR template

8. Click on `Create Pull Request`.

