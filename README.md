# CI/CD

## Setup environment
```
docker-compose up -d
```

# Đăng ký Gitlab Runner
Trong Gitlab, các Runner thực thi các jobs được định nghĩa trong file .gitlab-ci.yml.

Một Runner có thể là `một máy ảo` (VM), một `VPS`, một `bare-metal`, một `docker container` hay thậm chí là một `cluster container`. Gitlab và Runners giao tiếp với nhau thông qua API, vì vậy yêu cầu duy nhất là máy chạy Runner có quyền truy cập Gitlab server.

Phần tiếp theo hướng dẫn moị người đăng ký Gitlab runner thông qua docker :
Trong file `docker-compose.yaml`, chúng tôi đã đăng ký 1 service `gitlab-runner`
Dể đăng ký 1 gitlab runner, ta làm như sau

[How to install gitlab-runner using docker-compose](https://techoverflow.net/2021/01/12/how-to-install-gitlab-runner-using-docker-compose/)
```
docker exec -it app_gitlab_runner gitlab-runner register
```


- Enter the GitLab instance URL (for example, https://gitlab.com/):
  + Nhập : https://git.miichisoft.net/

- Enter the registration token:
    + Trong Gitlab, truy cập Settings => CI/CD => Runners => Lấy token ở đây

- Enter a description for the runner: 
  + Nhập tên bất kỳ (VD : base-vue-runner)

- Enter tags for the runner (comma-separated):
  + Bỏ qua

- Enter an executor: custom, docker-ssh, shell, virtualbox, docker-ssh+machine, docker, parallels, ssh, docker+machine, kubernetes:
  + Nhập : docker

- Enter the default Docker image (for example, ruby:2.7):
  + Nhập : node:16-alpine3.14

# Thiết lập các biến CICD (CICD variables)
Sử dụng Gitlab CI/CD Variables để lưu khóa SSH riêng tư mà Gitlab sẽ sử dụng để xác thực với máy chủ.
- Vào Settings > CI/CD
- Chọn Variable

Thêm các biến sau :
- PATH_TO_PROJECT : là đường dẫn đến thư mục được lưu trên server test (VD : base-express)
- SSH_SERVER_IP : ip server test (vd : 10.0.0.50)
- SSH_SERVER_USER : user truy cập server test
- SSH_PRIVATE_KEY : giá trị này được mô tả ở phần dưới đây

# Tạo cặp khóa SSH
[Use SSH keys to communicate with GitLab](https://docs.gitlab.com/ee/ssh/index.html#generate-an-ssh-key-pair)
- SSH vào server test (VD : ssh user@10.0.0.50)
- Tạo cặp khóa bằng cách sau :
  1. Chạy : `ssh-keygen -t ed25519 -C "email_address"`
    + VD : ssh-keygen -t ed25519 -C "test@miichisoft.net"
  2. Nhập tên file
    + VD : Enter file in which to save the key (/home/user/.ssh/id_ed25519): test
  3. Nhập mật khẩu (để trống)
    + Enter passphrase (empty for no passphrase):
  4. 2 file `test` (file lưu khóa riêng tư) và `test.pub` (file lưu khóa công khai) được tạo trong thư mục `~/.ssh`
  5. Lưu nội dung file `test` (cat ~/.ssh/test) vào trong biến `SSH_PRIVATE_KEY` (CICD Varibles)

- Thêm khóa công khai Gitlab SSH vào máy chủ : 
  + [Add Gitlab SSH public key to your server](https://dev.to/atdigitals/deploy-node-js-using-gitlab-ci-pipeline-2jod)
  1. Lưu giá trị public key trong file test.pub : 
    ```
    cat test.pub
    ```
  2. Thêm SSH public key vào `authorized_keys`
    ```
    nano ~/.ssh/authorized_keys
    ```
  3. Dán public key (giá trị ở bước 1)
  4. Lưu file




# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# Hrm Frontend

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Setup project

-   use node version 16.14.2
-   linux
    -   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    -   nvm install 16.14.2
    -   nvm use 16.14.2
    -   node -v // check version node current

Steps for install:

-   `cp env.example .env`
-   `npm i`

Steps for build:

-   `npm run build`

Steps for start:

-   `npm start`

## Add your files

-   [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
-   [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.miichisoft.net/division-1/hrm/hrm-frontend.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

-   [ ] [Set up project integrations](https://git.miichisoft.net/division-1/hrm/hrm-frontend/-/settings/integrations)

## Collaborate with your team

-   [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
-   [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
-   [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
-   [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
-   [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

-   [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
-   [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
-   [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
-   [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
-   [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name

Choose a self-explaining name for your project.

## Description

Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges

On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
