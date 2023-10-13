$ export SURREALDB_URL=http://$(kubectl get ingress surrealdb-tikv -o json | jq -r .status.loadBalancer.ingress[0].ip)
$ surreal sql -e $SURREALDB_URL
> DEFINE USER root ON ROOT PASSWORD 'StrongSecretPassword!' ROLES OWNER;

Verify you can connect to the database with the new credentials:
$ surreal sql -u root -p 'StrongSecretPassword!' -e $SURREALDB_URL
> INFO FOR ROOT
[{ namespaces: { }, users: { root: "DEFINE USER root ON ROOT PASSHASH '...' ROLES OWNER" } }]
