pipeline {
    agent any

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
        success {
            echo 'Install, Test, Build and Deploy'
        }
        failure {
            which 'npm'
            echo 'Algo fallo'
        }
    }
}