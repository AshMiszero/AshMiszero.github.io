var posts=["2024/05/04/CPA_AES密码芯片能量分析攻击/","2024/05/01/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };