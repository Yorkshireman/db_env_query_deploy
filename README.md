# db_env_query_deploy  
Grabs and displays the mongo service uri when deployed to the same space as that service (and bound to it) on Cloud Foundry.  

There is no start command in the code itself so, when deploying to CF, it has to be deployed with:  
`cf push db_env_query_deploy -c "node app.js"`  

