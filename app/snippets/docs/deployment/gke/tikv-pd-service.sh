$ kubectl get svc/sdb-datastore-pd
NAME       TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
sdb-datastore-pd   ClusterIP   10.96.208.25   <none>        2379/TCP   10h

$ export TIKV_URL=tikv://sdb-datastore-pd:2379
