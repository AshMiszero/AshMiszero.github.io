var posts=["2024/05/15/test/","2024/05/04/CPA_相关能量分析攻击/","2024/05/15/遗传算法求解最短路径/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };