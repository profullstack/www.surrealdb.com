$ helm repo add surrealdb https://helm.surrealdb.com
$ helm repo update
$ helm install \
    --set surrealdb.path=$TIKV_URL \
    --set surrealdb.auth=false \
    --set ingress.enabled=true \
    --set image.tag=latest \
    surrealdb-tikv surrealdb/surrealdb
