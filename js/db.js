var dbName = 'sampleDB';

var openReq  = indexedDB.open(dbName);
//　DB名を指定して接続。DBがなければ新規作成される。

openReq.onupgradeneeded = function(event){
//onupgradeneededは、DBのバージョン更新(DBの新規作成も含む)時のみ実行
    console.log('db upgrade');
}
openReq.onsuccess = function(event){
//onupgradeneededの後に実行。更新がない場合はこれだけ実行
    console.log('db open success');
    var db = event.target.result;
    // 接続を解除する
    db.close();
}
openReq.onerror = function(event){
// 接続に失敗
    console.log('db open error');
}