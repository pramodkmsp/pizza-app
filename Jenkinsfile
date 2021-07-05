node {
    stage ("Checkout SCM"){
        git-branch: 'master', url: 'https://github.com/pramodkmsp/pizza-app.git'
    }
    stage ("Install Node modules") {
        sh 'npm install'
    }
    stage ("Build app") {
        sh 'npm run build --prod'
    }
    stage ("Copy") {
        sh "cp -a /var/lib/jenkins/workspace/pizza-app-pipeline/dist/PizzaTask/. /var/www/master/html/"
    }
}