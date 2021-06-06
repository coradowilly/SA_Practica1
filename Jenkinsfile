pipeline {
    agent {label 'master'}

    stages {
        stage ('install') {
            steps {
                sh 'npm install'
            }
        }

        stage ('test') {
            steps {
                sh 'npm run test'
            }
        }

        stage ('build') {
            steps {
                sh 'npm run build'
            }
        }

        stage ('deploy') {
            steps {
                echo 'Deploying ...'
            }
        }
    }

    post {
        succes {
            echo 'Install, Test, Build and Deploy'
        }
        failure {
            echo 'Algo fallo'
        }
    }
}