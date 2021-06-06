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
                sh 'npm run test-headless'
            }
        }

        stage ('build') {
            steps {
                sh 'npm run build'
            }
        }

        stage ('deploy') {
            steps {
                cd docs/
                sh 'python -m SimpleHTTPServer &> /dev/null &'
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