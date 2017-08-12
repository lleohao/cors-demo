# cors-demo

## 使用步骤
1. `npm install` 安装所有依赖
2. 执行`npm run start:client`启动客户端
3. 执行`npm ru start:server`启动服务器



## 同源页面请求

1. 访问`http://localhost:5051/index.html`, 可以看到一个与服务器同源的页面

2. 点击页面中的`same-domain`按钮, 开启控制台

   ```http
   // 请求
   GET /no-domain HTTP/1.1
   Host: localhost:5051
   Connection: keep-alive
   Pragma: no-cache
   Cache-Control: no-cache
   User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36
   Accept: */*
   DNT: 1
   Referer: http://localhost:5051/index.html
   Accept-Encoding: gzip, deflate, br
   Accept-Language: zh-CN,en;q=0.8,zh;q=0.6,ja;q=0.4,zh-TW;q=0.2
   Cookie: mp_MA-9CBE-DD9DEE25C3C9_hubble=%7B%22deviceUdid%22%3A%20%227bc6bb65-9c3a-4497-9247-d03a4d966c91%22%2C%22updatedTime%22%3A%201502443864682%2C%22sessionStartTime%22%3A%201502433631691%2C%22sessionReferrer%22%3A%20%22http%3A%2F%2Flocalhost%3A8080%2Fmain%23%2Factivity%2Fsloth%2Fjobs%2Fdev%22%2C%22sessionUuid%22%3A%20%22b5741502-6542-4a4c-9321-8c0e80c1126e%22%2C%22initial_referrer%22%3A%20%22%24direct%22%2C%22initial_referring_domain%22%3A%20%22%24direct%22%2C%22persistedTime%22%3A%201501319705728%2C%22LASTEVENT%22%3A%20%7B%22eventId%22%3A%20%22da_screen%22%2C%22time%22%3A%201502443864685%7D%2C%22currentReferrer%22%3A%20%22http%3A%2F%2Flocalhost%3A8080%2Fmain%23%2Factivity%2Fsloth%2Fudf%22%2C%22user_id%22%3A%20%22hzshanlinna%40corp.netease.com%22%7D; _ga=GA1.1.429340581.1502521637; _gid=GA1.1.753020924.1502521637
   ```

   ```http
   //  响应
   HTTP/1.1 200 OK
   Access-Control-Allow-Origin: http://api.bob.com
   Content-Type: text/html
   Date: Sat, 12 Aug 2017 14:12:21 GMT
   Connection: keep-alive
   Transfer-Encoding: chunked
   ```

   可以看到虽然响应中设置`Access-Control-Allow-Origin`这个值, 但浏览器忽略它



## 跨域请求页面

1. 访问`http://localhost:8080/`
2. 页面中有四个按钮, 可以分别点击查看效果, 记得开启控制台