pipeline {
    agent {
        docker {
          image 'node'
        }
     }

    stages {
        stage ('install') {
            steps {
                sh '/usr/bin/npm install'
            }
        }

        stage ('test') {
            steps {
                sh '/usr/bin/npm run test'
            }
        }

        stage ('build') {
            steps {
                sh '/usr/bin/npm run build'
            }
        }

        stage ('deploy') {
            steps {
                echo 'Deploying ...'
            }
        }
    }

    post {
        success {
            echo 'Install, Test, Build and Deploy'
        }
        failure {
            echo 'Algo fallo'
        }
    }
}