pipeline {
    agent any

    stages {

        stage('Setup Node') {
            steps {
                sh '''
                    export NVM_DIR="/Users/siddharthbharani/.nvm"
                    source "$NVM_DIR/nvm.sh"

                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    export NVM_DIR="/Users/siddharthbharani/.nvm"
                    source "$NVM_DIR/nvm.sh"

                    npm ci
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                    export NVM_DIR="/Users/siddharthbharani/.nvm"
                    source "$NVM_DIR/nvm.sh"

                    npx playwright test
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            }
        }
    }
}