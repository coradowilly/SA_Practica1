node {
    stage('Checkout SCM') {
        git branch: 'master', url: 'https://github.com/coradowilly/SA_Practica1.git'
    }
    stage('Install') {
        sh 'npm i'
    }
    stage('Build') { 
        // Create Docker container 
        sh 'ng build --prod --aot --sm --progress=false'
    }
    stage('Test') { 
        // Run Unit testing
        sh 'ng test --progress=false --watch false'
    }
    stage('Deploy') { 
        // Deploy Docker container
        echo 'Deploying...'
    }
}