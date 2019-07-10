FROM fedora

EXPOSE 3000

RUN ( curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash - ) && \
  ( curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo ) && \
  dnf -y --setopt=tsflags=nodocs install git yarn && \
  dnf clean all

CMD [ "sleep", "infinity" ]