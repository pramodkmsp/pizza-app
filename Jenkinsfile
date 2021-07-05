node {
    stage ("Checkout SCM"){
        git-branch: 'master', url: 'https://github.com/pramodkmsp/pizza-app.git'
    }
    stage ("Install Node modules") {
        steps {
            sh 'npm install'
        }
    }
    stage ("Build app") {
        steps {
            sh 'npm run build --prod'
        }
    }
    stage ("Copy") {
        steps {
            sh "cp -a /var/lib/jenkins/workspace/pizza-app-pipeline/dist/PizzaTask/. /var/www/master/html/"
        }
    }
}