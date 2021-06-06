// pipeline {
//     agent any

//     stages {
//         stage ('install') {
//             steps {
//                 sh '/usr/bin/npm install'
//             }
//         }

//         stage ('test') {
//             steps {
//                 sh '/usr/bin/npm run test'
//             }
//         }

//         stage ('build') {
//             steps {
//                 sh '/usr/bin/npm run build'
//             }
//         }

//         stage ('deploy') {
//             steps {
//                 echo 'Deploying ...'
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Install, Test, Build and Deploy'
//         }
//         failure {
//             which 'npm'
//             echo 'Algo fallo'
//         }
//     }
// }
pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}