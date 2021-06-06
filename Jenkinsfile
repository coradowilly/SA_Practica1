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
                sh 'live-server docs/ --port=5000 &> /dev/null &'
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