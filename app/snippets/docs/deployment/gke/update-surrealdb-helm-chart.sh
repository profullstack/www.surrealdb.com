$ helm upgrade \
    --set surrealdb.path=$TIKV_URL \
    --set surrealdb.auth=true \
    --set ingress.enabled=true \
    --set image.tag=latest \
    surrealdb-tikv surrealdb/surrealdb
