$ kubectl get tidbcluster
NAME             READY   PD                  STORAGE   READY   DESIRE   TIKV                  STORAGE   READY   DESIRE   TIDB                  READY   DESIRE   AGE
sdb-datastore   True    pingcap/pd:v6.5.0   10Gi      3       3        pingcap/tikv:v6.5.0   10Gi      3       3        pingcap/tidb:v6.5.0           0        5m
