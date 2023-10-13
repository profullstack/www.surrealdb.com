$ kubectl delete tidbcluster sdb-datastore
$ helm uninstall surrealdb-tikv
$ helm -n tidb-operator uninstall tidb-operator
$ gcloud container clusters delete surrealdb-guide --region REGION --project PROJECT_ID
