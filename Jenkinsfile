node
{
 
  stage("CheckOutCodeGit")
  {
   git credentialsId: 'github-credientials', url: 'https://github.com/Visionsedge-Technologies/React-Frontend-'
 }
 
 stage("Build")
 {
 nodejs(nodeJSInstallationName: 'nodejs 19.1.0') {
        sh 'npm install'
    }
 }  
 
  stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs 19.1.0') {
        sh 'npm run sonar'
    }
      
        } 
		
    stage('UploadintoNexus') {
       nodejs(nodeJSInstallationName: 'nodejs 19.1.0') {
          sh 'npm publish'
      }
      
          }	
 
 stage('RunNodeJsApp')
 {
 //sh "./scripts/run.sh"
 nodejs(nodeJSInstallationName: 'nodejs 19.1.0') {
        sh 'npm start &'
    }
}    
    
}
