const $ = Env('书旗小说')
let ReadTimes = 0;
let vediogold = 0;
let drawgold = 0;

//签到 /api/activity/xapi/signin/v5/signInAction
let sqxssigninhd={"Host":"ocean.shuqireader.com","content-length":"2141","accept":"application/json, text/plain, */*","user-agent":"Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 AliApp(shuqi_android/11.3.4.132) TTID/src1011 WindVane/8.5.0 Shuqi (HUAWEI-YAL-AL10__shuqi__11.3.4.132__7055) AliApp(SQREADER/11.3.4.132)","content-type":"application/x-www-form-urlencoded","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller","sec-fetch-site":"same-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210308&subVer=sqrelease&appVer=11.3.4.132&platform=an&placeid=7055&sqDevId=MTYxNTI5NjYwODExNTE2NQ==&oaid=&sdk=29&wh=1080x2232&msv=3&enc=386581615374017437&sn=1615296608115165&vc=8663&mod=YAL-AL10&manufacturer=HUAWEI&brand=HONOR&net_type=wifi&first_placeid=src1011&aak=89eb13&user_id=2020969484&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q&utype=vip&net=4&net_env=4&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r&umidtoken=9DVLP+FLOp5ANTV4GytY1+rgyniPQxGV&permissionType=3&writer_switch=1&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20364&spm=a2oun.12867194","accept-encoding":"gzip, deflate","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
let sqxssigninbd='clientTimestamp=1615374026&position=501&userId=2020969484&signInType=1&wua=UOX3_iE0KSayRjQ5FxbyhLM3z26ATh1sO1iDbZvirjGdGeC%2B97xaH04BP0NqDltQ4gCt8smDT7aorxp2OsyiGpLjDjBFugxS2mS%2B%2ByR8vkK%2BOprkuMz9sWxR08mtRBupCJ9zce9%2BAy0atRc4DTTbGXmPYtX1x3BnSr%2Fpc0PJsitlzvv2aHeWvBFrghaCIxv5r7KXc0Ax15NAeot6sFCixRXUiPbRb3Wbq%2FKj3teJ%2BzqgCZDr4%2FPKxIzCnrNGJUF%2BJN7qowTdv4q6APZ%2BXrhSkxG92dmVE2XGn%2BU1Yt9F984OVhdiRsVlb2iDrDzx%2ByZcb7%2BXhxCvfX2NWv1PvYgxFdP0y6QQw69YDDvHsPRvSAtQdHTawWlIQ38YVfadZPV0IIj8Z8%2BdU4ytGFYRdQVGznIAJVNRVq4nkGLUqf6%2Fci7y0X3S%2FRDUjucyYtlCINITKJPcRUqtwW8NXLZxRF%2FcVNjmaNN9x%2BQmlacd%2BUOG155SppYg%3D&ua=&miniWua=HHnB_l5QwOnF7IbgqJFKC7EkIjxFeddNqCdzQKqOq6z90K%2FE%2Fwh%2BebkuXDQGGOJD9%2BGya7WPmb6gXL2ieOhZXIJ4K9%2Bt80HWvhzWaQ9vbLt1hyTxxrzOiSmbtO%2Bbk9dAGxl9D&umidtoken=9DVLP%20FLOp5ANTV4GytY1%20rgyniPQxGV&secureDeviceType=android&secureAppName=wenxue-activity-proxy&sign=c5fbc626f15dbd088069ac8658bbe98f&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210308%26subVer%3Dsqrelease%26appVer%3D11.3.4.132%26platform%3D2%26placeid%3D7055%26sqDevId%3DMTYxNTI5NjYwODExNTE2NQ%253D%253D%26oaid%3D%26sdk%3D29%26wh%3D1080x2232%26msv%3D3%26enc%3D386581615374017437%26sn%3D1615296608115165%26vc%3D8663%26mod%3DYAL-AL10%26manufacturer%3DHUAWEI%26brand%3DHONOR%26net_type%3Dwifi%26first_placeid%3Dsrc1011%26aak%3D89eb13%26user_id%3D2020969484%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q%26utype%3Dvip%26net%3D4%26net_env%3D4%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%26umidtoken%3D9DVLP%2520FLOp5ANTV4GytY1%2520rgyniPQxGV%26permissionType%3D3%26writer_switch%3D1%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20364%26spm%3Da2oun.12867194'
//去看书  /ad/v1/api/prize/readpage/pendant/lottery 
let sqxsckhd = [{ "Content-Type": "application/x-www-form-urlencoded", "Content-Length": "1871", "Host": "ocean.shuqireader.com", "Connection": "Keep-Alive", "Accept-Encoding": "gzip", "User-Agent": "okhttp/3userId.7.0" }]
let sqxsckbd = ['userId=2020969484&resourceId=679&requestSrc=shuqi&deliveryId=706&wua=UOX3_1qtDSuzTBYzTsVxfonMX4OgqRG6WPwKZ7R1cgvBvGk6EafZWceY0esjCZq%2BuqkbycZi9Urrfs1mnb0rh194tf%2BAihwzWOzDk9DN4LUimTXqEwJxbjKakt9rSk7YDZSG8%2B63Xoxrp0Mu0DjQx3bK67%2BCkn%2FwEAVgig%2Fiqidl1%2FZO4J8%2Bu7ECLraUYnqAsyB6Q0WxXE6qJVkL9b3VGSwTUEveL6FOMC0bxH2VqJc3H6dusQf0sk5xqisJOKmrKauP0kG9aEhjHbSc86uGEhdsIMJlFOugiMrnuPirs0tszTPrv6Mx7524hwIVti3fSmFORiLhE8tsHmQh2G4qMRbtbWRrlLpIAZei0eydqZgUfsHkyWxJFKWztSA0Qe03RPxqa9d0mL%2Fftqv4LHBVc4lzOq7ebtn8kGtXlNU0na5aUahs5z2jGWbPuL1abo7D3TLhhLn78jp7cBn5k1rBiOZy2hB4FxwmTH%2BQIO2woS%2F84j4A%3D&miniWua=HHnB_53wzpeOvQHWzFMLkWkOo%2FIcEAWMocL30ra4j6qCkrkWpCyhQKCeKrTlYW3IY7Siq4y2gtI9ZLZ7RGmT5YOOU7nYd%2BOcRrzrOLNAdWhK8r6%2BOID4cBYSonz%2BypnKKNtbD&platform=an&timestamp=1615374157&key=sq_app_ad&sign=BAD1FFFAB64462D0CD3B8931A96DBB3D&_public=soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253Dan%2526placeid%253D7055%2526sqDevId%253DMTYxNTI5NjYwODExNTE2NQ%253D%253D%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2232%2526msv%253D3%2526enc%253D265381615374157325%2526sn%253D1615296608115165%2526vc%253D8663%2526mod%253DYAL-AL10%2526manufacturer%253DHUAWEI%2526brand%253DHONOR%2526net_type%253Dwifi%2526first_placeid%253Dsrc1011%2526aak%253D89eb13%2526user_id%253D2020969484%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526utdid%253DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%2526umidtoken%253D9DVLP%252BFLOp5ANTV4GytY1%252BrgyniPQxGV%2526permissionType%253D3']
//看视频 /ad/v1/api/prize/lottery 视频
let vediogoldprizehd = { "Host": "ocean.shuqireader.com", "content-type": "application/x-www-form-urlencoded", "content-length": "1898", "accept-encoding": "gzip", "user-agent": "okhttp/3.7.0" }
let vediogoldprizebd = 'userId=2020969484&resourceId=625&requestSrc=%E4%BB%BB%E5%8A%A1&deliveryId=803&wua=UOX3_2a4Lf%2F2q0uc8Kv0PLcJiP%2Bf%2Fuv5ZDqjr%2FKaBWWj4%2B3hqY77qLHdZD0P92tgRcQi2L%2B%2B9SkbQrHAgeSzy5sxVrZUeZa0DPtUTMZQMnG%2FP4RosEnm1x1LAAql28vCKpB9InmMzJzeci7idtkpIuWkj51pN8Qc1aweBiLHEavJnwG2RzYSJlNt57rE0VlvYfsW8GFxpNYpWv%2BW%2BPIgHgxCnSwkHVRERxzb%2F9TpRC8yrElxXlcflPOphoVmlvyTp0pV5cfO6FuXyjZwNCgVIJhTJTPOiFr8mehVmRw2bNYWZvwwrDvgQeSq5z5d8mQF3J34Y9t%2BckZNZh8%2FMwPnSSnktoUitX4jTY2XJLB%2BtA5xab09ypvbZr1eXMau7oy1Mw58BUy83Z2raf1UcJOS%2B%2F2Y8yh%2Bj00Oxt8hj3zl%2BkZeLaKoKqm427SHADPVpQwdxUoExrifXA3xGHcJ11HGpfC1pQolPxtUiN3s7m7Mb6lIBATE%3D&miniWua=HHnB_83q4pFHfRoIelFHd1Broz8N8XPeUKon9GAaTBeoyzB%2Fho2RLVIXt9JVqsZe0CEykW5rqct6NNSfZqot5NMmE1Yuj6rZxBmAUmcKoH1jvQK0eiW%2Bi2Zdz7Uy%2BEH%2Bs0CgT&platform=an&timestamp=1615374249&key=sq_app_ad&sign=DAFB94109F06F40D65F5AE069F1E8C9F&_public=soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253Dan%2526placeid%253D7055%2526sqDevId%253DMTYxNTI5NjYwODExNTE2NQ%253D%253D%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2232%2526msv%253D3%2526enc%253D795681615374249537%2526sn%253D1615296608115165%2526vc%253D8663%2526mod%253DYAL-AL10%2526manufacturer%253DHUAWEI%2526brand%253DHONOR%2526net_type%253Dwifi%2526first_placeid%253Dsrc1011%2526aak%253D89eb13%2526user_id%253D2020969484%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526utdid%253DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%2526umidtoken%253D9DVLP%252BFLOp5ANTV4GytY1%252BrgyniPQxGV%2526permissionType%253D3'
//收集金币 /prizecenter/xapi/prize/manual/receive  
let receivecoinckhd = {"Host":"ocean.shuqireader.com","content-length":"1351","accept":"application/json, text/plain, */*","user-agent":"Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 AliApp(shuqi_android/11.3.4.132) TTID/src1011 WindVane/8.5.0 Shuqi (HUAWEI-YAL-AL10__shuqi__11.3.4.132__7055) AliApp(SQREADER/11.3.4.132)","content-type":"application/x-www-form-urlencoded","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller","sec-fetch-site":"same-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210308&subVer=sqrelease&appVer=11.3.4.132&platform=an&placeid=7055&sqDevId=MTYxNTI5NjYwODExNTE2NQ==&oaid=&sdk=29&wh=1080x2232&msv=3&enc=386581615374017437&sn=1615296608115165&vc=8663&mod=YAL-AL10&manufacturer=HUAWEI&brand=HONOR&net_type=wifi&first_placeid=src1011&aak=89eb13&user_id=2020969484&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q&utype=vip&net=4&net_env=4&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r&umidtoken=9DVLP+FLOp5ANTV4GytY1+rgyniPQxGV&permissionType=3&writer_switch=1&serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20364&spm=a2oun.12867194","accept-encoding":"gzip, deflate","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
let receivecoinckbd = 'platform=2&src=&timestamp=1615374758&userId=2020969484&sqSv=1.0&appVer=11.3.4.132&placeId=&sign=5fbc6070157d1ab59ae2ff7a9e3b91ad&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210308%26subVer%3Dsqrelease%26appVer%3D11.3.4.132%26platform%3D2%26placeid%3D7055%26sqDevId%3DMTYxNTI5NjYwODExNTE2NQ%253D%253D%26oaid%3D%26sdk%3D29%26wh%3D1080x2232%26msv%3D3%26enc%3D386581615374017437%26sn%3D1615296608115165%26vc%3D8663%26mod%3DYAL-AL10%26manufacturer%3DHUAWEI%26brand%3DHONOR%26net_type%3Dwifi%26first_placeid%3Dsrc1011%26aak%3D89eb13%26user_id%3D2020969484%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q%26utype%3Dvip%26net%3D4%26net_env%3D4%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%26umidtoken%3D9DVLP%2520FLOp5ANTV4GytY1%2520rgyniPQxGV%26permissionType%3D3%26writer_switch%3D1%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20364%26spm%3Da2oun.12867194'
//视频获取抽奖 /api/ad/v1/api/prize/lottery
let vediodrawprizeckhd = { "Host": "ocean.shuqireader.com", "content-type": "application/x-www-form-urlencoded", "content-length": "1912", "accept-encoding": "gzip", "user-agent": "okhttp/3.7.0" }
let vediodrawprizeckbd = 'userId=2020969484&resourceId=701&requestSrc=page_render_sq_welfare_lottery_page&deliveryId=774&wua=UOX3_IDornfe%2BGrvUS162SznBlHJOPTsiKpwTlR5TPdbbifQYSGZlhAAuK83GIccAM%2FohlyD%2Buj9ZTZr9nvx%2BitJFV5ZivnYZZQ%2BHHTy5tR6HoRVVwJUzt5oIHBt87L0ilixcDqPLu7muD3Ir4xwj2kHH1k7lSSRba5J0V%2BKVyxPNPtr8MoD%2FCVhC6Hks1tmATjaymZWOwSDmcIpmRLlo4txhUOMNP2KTzs5gcrnqOa22C%2FTNcDfzjyc2pdd2wfkBLRnAg2ys6%2F0ghXUcmaRa601aHjCqZ1uONQ5Z0uiaCDFd8L2%2BCyzj%2F5iDXqIyuj2SalkvNknJKstR1p%2ByAxgucjIM1Wbg5SeaeL3XMTtrqhx%2Bm8fnnb7zh8A2NWimMJdAXoD5hxdqkYcBg6W9JeGnoUbhSlkOs53UIa5wV11vaVd9J2fbqXg3IV0ggOdNq5fchDJSiOwivuK79a1GmTLltGPF9yRQSaMLWfyleO4dlctmB8Y%3D&miniWua=HHnB_9wQ1%2B8Yj6vrfy%2Btyzf699N%2F4vTWeMRIR5FlHuM%2BUa9w%2FRyo8QF%2FLFVJnXtsPBQaRUfbyd3z9GfWMwkm6BivEr5euWRYtOkCaqPgtYEu6d7eBTCnm4%2BCaXwCGIfW34jrL&platform=an&timestamp=1615460353&key=sq_app_ad&sign=ACF8BB13C991E7FB11F8963AF068DD62&_public=soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253Dan%2526placeid%253D7055%2526sqDevId%253DMTYxNTI5NjYwODExNTE2NQ%253D%253D%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2232%2526msv%253D3%2526enc%253D580501615460353881%2526sn%253D1615296608115165%2526vc%253D8663%2526mod%253DYAL-AL10%2526manufacturer%253DHUAWEI%2526brand%253DHONOR%2526net_type%253Dctnet%2526first_placeid%253Dsrc1011%2526aak%253D89eb13%2526user_id%253D2020969484%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5ODk2NCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM4MDU2NCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.9yXZc-av978l2TfyCJRoBLuQqb8HIEftab1kuemYWTBFPGNpWhYCh9DE4kTp6vKrBMp78yDpmQhENPzwc4c2UA%2526utype%253Dvip%2526net%253D3%2526net_env%253D3%2526utdid%253DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%2526umidtoken%253D9DVLP%252BFLOp5ANTV4GytY1%252BrgyniPQxGV%2526permissionType%253D3'
//转盘抽奖 /api/activity/activity/v1/lottery/draw
let drawckhd = {"Host":"ocean.shuqireader.com","content-length":"2004","accept":"application/json, text/plain, */*","user-agent":"Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 AliApp(shuqi_android/11.3.4.132) TTID/src1011 WindVane/8.5.0 Shuqi (HUAWEI-YAL-AL10__shuqi__11.3.4.132__7055) AliApp(SQREADER/11.3.4.132)","content-type":"application/x-www-form-urlencoded","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller","sec-fetch-site":"same-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":"https://render-web.shuqireader.com/render/sq-welfare/page/lottery_page/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210308&subVer=sqrelease&appVer=11.3.4.132&platform=an&placeid=7055&sqDevId=MTYxNTI5NjYwODExNTE2NQ==&oaid=&sdk=29&wh=1080x2232&msv=3&enc=795681615374646168&sn=1615296608115165&vc=8663&mod=YAL-AL10&manufacturer=HUAWEI&brand=HONOR&net_type=wifi&first_placeid=src1011&aak=89eb13&user_id=2020969484&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q&utype=vip&net=4&net_env=4&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r&umidtoken=9DVLP+FLOp5ANTV4GytY1+rgyniPQxGV&permissionType=3&writer_switch=1&serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.13804299","accept-encoding":"gzip, deflate","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
let drawckbd = 'wua=UOX3_wp1EjpvqEGcl6Xl1C%2Bj5hNiwVMVlfrQ4faIFzbgJ4yWFKVLJkjpufKAqlGqvnmM8HB6AswIrlqQpTripK1jXQI%2BB47VRodtAC3QLCWasUP6RXSiiU%2Fagiw39IQe22dJ27wKxc0mN0IZ2ZuA7HedWZtjYixiJC9Bz8veUpMUdvLyUchH%2FPiaV1mqvtPUFlmuEB%2B0bEwWp5hFH7sxLl9xyTkJeV1gBpmGGb5qZl8lIxM9OMdROaD2Xj9WYDYNx7mQrNQ2jVpjheJd77QWwhGaL5kb%2BMSdwLBjBYhMJVjnyzZk81NzPdjmFUPUSFnVH5EzbRLmTrq3%2BYA5Vv5DttbOoyzG8kj6RmeTKAe0%2FG0jiiitHrRGvJrlm259ha4YfkvyualTx3zVWcq%2BCsr%2B00JAfT2wCj3lWcCsyAzcG0YTMV9wHxWM1VZngcdiye1ESJbGt5pTBb74tqpYQNmUASyYeF6Ntk1oBrbcArRw63V5s92g%3D&ua=&userId=2020969484&umidtoken=9DVLP+FLOp5ANTV4GytY1+rgyniPQxGV&secureDeviceType=android&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1615374680&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=1&sqSv=1.0&sign=3d9f06f2d511ee479d0ae86cf113f278&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210308%26subVer%3Dsqrelease%26appVer%3D11.3.4.132%26platform%3D2%26placeid%3D7055%26sqDevId%3DMTYxNTI5NjYwODExNTE2NQ%253D%253D%26oaid%3D%26sdk%3D29%26wh%3D1080x2232%26msv%3D3%26enc%3D795681615374646168%26sn%3D1615296608115165%26vc%3D8663%26mod%3DYAL-AL10%26manufacturer%3DHUAWEI%26brand%3DHONOR%26net_type%3Dwifi%26first_placeid%3Dsrc1011%26aak%3D89eb13%26user_id%3D2020969484%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MjQxMCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDAxMCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.Ndyi_Wk8Be5LBJfbAh0CjwRqnrxtUpV9MEYVvN_tyCf9HoEhB09xjuHMYUHd9SrYeheMGzBRiFzfACIwj6aq8Q%26utype%3Dvip%26net%3D4%26net_env%3D4%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%26umidtoken%3D9DVLP%2520FLOp5ANTV4GytY1%2520rgyniPQxGV%26permissionType%3D3%26writer_switch%3D1%26serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.13804299'
// 用户记录url api/activity/xapi/gold/record
let userurl = 'https://ocean.shuqireader.com/api/activity/xapi/gold/record?userId=2020969484&page=1&pageSize=10&sqSv=1.0&sign=1dd6d2f76402869c4051da17bc7c2186&key=sq_h5_gateway&_public=appfunction%253Dan_bmk%25252C1_clo%25252C1_smjs%25252C1%2526soft_id%253D1%2526ver%253D210308%2526subVer%253Dsqrelease%2526appVer%253D11.3.4.132%2526platform%253D2%2526placeid%253D7055%2526sqDevId%253DMTYxNTI5NjYwODExNTE2NQ%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2232%2526msv%253D3%2526enc%253D103251615375327892%2526sn%253D1615296608115165%2526vc%253D8663%2526mod%253DYAL-AL10%2526manufacturer%253DHUAWEI%2526brand%253DHONOR%2526net_type%253Dwifi%2526first_placeid%253Dsrc1011%2526aak%253D89eb13%2526user_id%253D2020969484%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJYU2dVRDRhKzB4TURBTW9PT1UzNGVkT2siLCJpbWVpIjoiMTYxNTI5NjYwODExNTE2NSIsInNuIjoiMTYxNTI5NjYwODExNTE2NSIsImV4cCI6MTYxNTg5MzI1MCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NDg1MCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiJhbiJ9.qqi2L7ZzUPb08ihr3o4oJoqk_i_il4y0GSPECRXeHmT-UXHHWKnm91Ez67XsqE00R-PbXnzHUiXg621NReiIPQ%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526coreType%253D1%2526rom%253D10%2526skinId%253D999%2526skinVersion%253D1.0%2526skinVersionPrefix%253D1%2526imagetype%253D1%2526utdid%253DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%2526umidtoken%253D9DVLP%25252BFLOp5ANTV4GytY1%25252BrgyniPQxGV%2526permissionType%253D3%2526writer_switch%253D1%2526fe-env%253Duae-prod%2526spm%253Da2oun.13804299'


//             书旗极速版 
//签到 api/activity/xapi/signin/v5/signInAction
let jssqxssigninhd={"Host":"ocean.shuqireader.com","content-length":"2122","accept":"application/json, text/plain, */*","user-agent":"Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 AliApp(shuqi_lite_android/1.0.7.7) TTID/src60005 WindVane/8.5.0 Shuqi (HUAWEI-YAL-AL10__shuqi__1.0.7.7__60005) AliApp(SQREADER-LITE/1.0.7.7)","content-type":"application/x-www-form-urlencoded","origin":"https://render-web.shuqireader.com","x-requested-with":"com.shuqi.controller.lite","sec-fetch-site":"same-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":"https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?appfunction=an_bmk,1_clo,1_smjs,1&soft_id=1&ver=210226&subVer=sqrelease&appVer=1.0.7.7&platform=115&placeid=60005&imei=1615376429575584&oaid=&sdk=29&wh=1080x2232&msv=3&enc=698721615376477423&sn=1615376429575584&vc=e91b&mod=YAL-AL10&manufacturer=HUAWEI&brand=HONOR&net_type=wifi&first_placeid=src60005&aak=691f63&user_id=2020969484&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJmYXN0X1hTZ1VENGErMHhNREFNb09PVTM0ZWRPayIsImltZWkiOiJmYXN0XzE2MTUzNzY0Mjk1NzU1ODQiLCJzbiI6ImZhc3RfMTYxNTM3NjQyOTU3NTU4NCIsImV4cCI6MTYxNTg5NDg3NCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NjQ3NCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiIxMTUifQ.aOatuFbs63bLmhB6yiq_51x8IjH8PmzbvO87f9f1V8e0c4WR8USyV-StILyFq0x85MmSkv_q41Q5aFCtzSa5WA&utype=vip&net=4&net_env=4&isp=46011&coreType=1&rom=10&skinId=999&skinVersion=1.0&skinVersionPrefix=1&imagetype=1&utdid=WFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r&umidtoken=0XZLmp9LOn69vTV4G7sTtDtE8D0O9D8F&permissionType=3&writer_switch=1&from=ShuqiTab&serviceWorkerOn=1&spm=a2o558.12867194","accept-encoding":"gzip, deflate","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
let jssqxssigninbd='clientTimestamp=1615376594&position=601&userId=2020969484&signInType=1&wua=8pv7_7GomaKtyFM%2BX36NuWqehQJl5UffJj4P8Wg%2FPD0J1ShQzKJFjEzDig%2Bh064NuQpxRHkZVSBDP79uC4rR%2F3Ml1tUjY7P56wo7tfdBj5yRDYVIralW528i8G5qb6mX0LIY9yO%2B58T%2Fi3BvSBtzsGFCkfXlYJsKTe%2BcfRRvygrwKeO9BG7p8j9EtNzUNqzeaC%2FORyr%2BMYWiT24T4lkW43zzyJVML7O7fzEB%2B3PG3c21kGIherSl3zM3X8f9RsfGdeIdXxaLuhH3YxNRabff%2FZCAYfUPmM75j6uLxwO4c%2B9SkKHgJF59byczH9WC5d8n44GASvSz%2FRJqwB8LuMv8edqhtd%2BHWciS3e9nG6A7MxJzZIn4tc5KG7iqqT8HFWayDrO7JH3IsJt6Wc6iC1%2BOVKpef4JCbstpORd5uU8GyzkN6WQpgWntPtxayTsTvSYmVwDQLbczE%2Be0StYDRifdb22xNZ94%2Bx3zplpEueT3awJK8tcET1ENRjYWWDguTr2xIUmOb&ua=&miniWua=HHnB_YHorlZqHN%2FY61F%2BtNvz9R9ENMTFkdholY%2BamGcKsJgRBhYyNcfSjVezsEkNXREJqx%2ByzESO8RHFEiv99KOnjmZz7jgDKoLKMdVp4yLr5XSLM%2Fu3DQT7LaTA8fevq2jPm&umidtoken=0XZLmp9LOn69vTV4G7sTtDtE8D0O9D8F&secureDeviceType=android&secureAppName=wenxue-activity-proxy&sign=40f5f762b963ce6fe3f711fd09df469e&key=sq_h5_gateway&_public=appfunction%3Dan_bmk%252C1_clo%252C1_smjs%252C1%26soft_id%3D1%26ver%3D210226%26subVer%3Dsqrelease%26appVer%3D1.0.7.7%26platform%3D115%26placeid%3D60005%26imei%3D1615376429575584%26oaid%3D%26sdk%3D29%26wh%3D1080x2232%26msv%3D3%26enc%3D698721615376477423%26sn%3D1615376429575584%26vc%3De91b%26mod%3DYAL-AL10%26manufacturer%3DHUAWEI%26brand%3DHONOR%26net_type%3Dwifi%26first_placeid%3Dsrc60005%26aak%3D691f63%26user_id%3D2020969484%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJmYXN0X1hTZ1VENGErMHhNREFNb09PVTM0ZWRPayIsImltZWkiOiJmYXN0XzE2MTUzNzY0Mjk1NzU1ODQiLCJzbiI6ImZhc3RfMTYxNTM3NjQyOTU3NTU4NCIsImV4cCI6MTYxNTg5NDg3NCwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NjQ3NCwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiIxMTUifQ.aOatuFbs63bLmhB6yiq_51x8IjH8PmzbvO87f9f1V8e0c4WR8USyV-StILyFq0x85MmSkv_q41Q5aFCtzSa5WA%26utype%3Dvip%26net%3D4%26net_env%3D4%26isp%3D46011%26coreType%3D1%26rom%3D10%26skinId%3D999%26skinVersion%3D1.0%26skinVersionPrefix%3D1%26imagetype%3D1%26utdid%3DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%26umidtoken%3D0XZLmp9LOn69vTV4G7sTtDtE8D0O9D8F%26permissionType%3D3%26writer_switch%3D1%26from%3DShuqiTab%26serviceWorkerOn%3D1%26spm%3Da2o558.12867194'
// 看书 api/activity/v1/activity/pendant/lottery
let jssqxsckhd={"Host":"ocean.shuqireader.com","content-type":"application/x-www-form-urlencoded","content-length":"1847","accept-encoding":"gzip","user-agent":"okhttp/3.7.0"}
let jssqxsckbd='userId=2020969484&platform=115&actId=353&wua=8pv7_zsslIXvCI2KMeCh6eZ95sP9XRHc7tb%2BEz42n2gzmilycO6O0n7E1oAVRcWyRP8aSbhMrQL9FO5l2lhQuMeqzZ20HYCtaH3ZozRaO29t8eeSAW%2B8DB0Aggl5guHnmvIPyqJqrEWlSTJvopyUtrUZ1ZO4K3LD1bsuAamXOjW9N5HYWXuBnLuGHj70jPWMAh4MkKsg6EjzTAlyffwYwbGt9eyNnBLnEKm3og5NzpNDUHge8JudvJDYCCOKBw1cNuUSxPYKv0aTkZMRUHbUTeUHZNWmoskyYqLH1AYR64TNsy%2BWfvUMR3dTqsKx2Y6nXatjypqBg7PVRuq6jNs5VvwKyfHbSZmxuQvX%2FUPdfTnj%2Fj9nsdT2YOU0VVNSrw8R7lKYNhWwDTlMpVwKfPuzpPxGnMVo%2BgUoQtMyV%2FOlefDNnZgk5b6dLSGa6eP48RGPSvQhfWcgmI%2FH5aGUsMHz9EPhbbogZx2y3rBRq2UmuSMOxXpbXI7wxMjvdNAujygs6vWOI&miniWua=HHnB_WTApSH2SiGpFNPVcC6A%2B34eLtFNg1%2Be%2F0Je9hg6NwYz4D%2F%2BVgRJe7wBSmIMKYgmbeEnyIpwpk5OmaT0nid1ru%2FRovHRMLvE4dGxfkLI4rZb%2BE%2Br84CP7kqeTxBIrCtdj&key=sq_app_ad&sign=64F0D69820FEF4F6D7C245DB6AA77FA2&_public=soft_id%253D1%2526ver%253D210226%2526subVer%253Dsqrelease%2526appVer%253D1.0.7.7%2526platform%253D115%2526placeid%253D60005%2526imei%253D1615376429575584%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2232%2526msv%253D3%2526enc%253D350221615376826079%2526sn%253D1615376429575584%2526vc%253De91b%2526mod%253DYAL-AL10%2526manufacturer%253DHUAWEI%2526brand%253DHONOR%2526net_type%253Dwifi%2526first_placeid%253Dsrc60005%2526aak%253D691f63%2526user_id%253D2020969484%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJmYXN0X1hTZ1VENGErMHhNREFNb09PVTM0ZWRPayIsImltZWkiOiJmYXN0XzE2MTUzNzY0Mjk1NzU1ODQiLCJzbiI6ImZhc3RfMTYxNTM3NjQyOTU3NTU4NCIsImV4cCI6MTYxNTg5NTA1OSwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NjY1OSwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiIxMTUifQ.zUDLxxTAEpHpN86_AVi-R2QONfo135eih5SHwF1pghzoCWbPmuZytjp11QZEqpLd0jwUNUDUrgaGpNaVfVyj7g%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526isp%253D46011%2526utdid%253DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%2526umidtoken%253D0XZLmp9LOn69vTV4G7sTtDtE8D0O9D8F%2526permissionType%253D3'
//视频  api/ad/v1/api/prize/lottery
let jsvediogoldprizehd={"Host":"ocean.shuqireader.com","content-type":"application/x-www-form-urlencoded","content-length":"1900","accept-encoding":"gzip","user-agent":"okhttp/3.7.0"}
let jsvediogoldprizebd='userId=2020969484&resourceId=715&requestSrc=%E4%BB%BB%E5%8A%A1&deliveryId=907&wua=8pv7_lpTK4RO%2BH37r4ON%2BMLNwTRA9mUYDkBrwIbdPr%2BQNBnHaj6YJgvG1Uz6vXna9NELEoVrUJoNwYKIng2r1xy6Yq6rQyWuuP%2FR1tCGVzJJl9WaPiqJxuzZcbekT22T4et209MD9v3kzd7SI3P1%2BdX6uTS3kvKP0wIrheNaCIiRvtgf8Wo%2BSsIssskzzMnGmu6JL65%2BK5ynW3WE5aE2oZJIW2dYmSZGgBX68TpVYN2c%2BznyA%2FutGAKzZphshAdWUGpLLzOPYm7%2B%2BZKmi6SdY2ZxxICk1OEo7av5XZnBbxS%2BIxUseqXGudjSTxaUzWHOZt4FtbNG%2FIanJvbrXvQ1yiJYerqIel18hHOi3ct474FrPGL5vw1v5URqNCxhAr9yhNaXr93I84WbHrqFwdaLL5N6UeaGMyh%2FKaX%2Bc63YsY3mEu2C2T1R0FZamHmqOTlPtQ6NXxGDpS4xPzRwm0sZdSZboE6UjP7EVPdpNGoCvETolEyo%3D&miniWua=HHnB_fGKVodUN6fCqySrFs%2BnNhlNjFUc4FqgbSoR95cZ9TEoJZQkuN9Ix6VkVNSTqzkDOrS1bnIpU1RKx01QrHXsoqP29AcncRmU1fVmZJNjxLyq9sFsL61GbzWeOMNkZXmRB&platform=115&timestamp=1615376956&key=sq_app_ad&sign=C99AE5A75729BDE3D177A893554631AD&_public=soft_id%253D1%2526ver%253D210226%2526subVer%253Dsqrelease%2526appVer%253D1.0.7.7%2526platform%253D115%2526placeid%253D60005%2526imei%253D1615376429575584%2526oaid%253D%2526sdk%253D29%2526wh%253D1080x2232%2526msv%253D3%2526enc%253D759321615376956290%2526sn%253D1615376429575584%2526vc%253De91b%2526mod%253DYAL-AL10%2526manufacturer%253DHUAWEI%2526brand%253DHONOR%2526net_type%253Dwifi%2526first_placeid%253Dsrc60005%2526aak%253D691f63%2526user_id%253D2020969484%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTY5NDg0IiwidXRkaWQiOiJmYXN0X1hTZ1VENGErMHhNREFNb09PVTM0ZWRPayIsImltZWkiOiJmYXN0XzE2MTUzNzY0Mjk1NzU1ODQiLCJzbiI6ImZhc3RfMTYxNTM3NjQyOTU3NTU4NCIsImV4cCI6MTYxNTg5NTA1OSwidXNlcklkIjoiMjAyMDk2OTQ4NCIsImlhdCI6MTYxNTM3NjY1OSwib2FpZCI6bnVsbCwicGxhdGZvcm0iOiIxMTUifQ.zUDLxxTAEpHpN86_AVi-R2QONfo135eih5SHwF1pghzoCWbPmuZytjp11QZEqpLd0jwUNUDUrgaGpNaVfVyj7g%2526utype%253Dvip%2526net%253D4%2526net_env%253D4%2526isp%253D46011%2526utdid%253DWFNnVUQ0YSsweE1EQU1vT09VMzRlZE9r%2526umidtoken%253D0XZLmp9LOn69vTV4G7sTtDtE8D0O9D8F%2526permissionType%253D3'
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function all() {
    //nodejs运行
    if ($.isNode()) {
        $.log(`\n============书旗小说=============`);
        ReadTimes = 0;
        vediogold = 0;
        drawgold = 0;
        //签到
        await sqxssignin()
        //看视频奖励抽奖次数
        await vediodrawprize(0);
        //看视频奖励金币
        await vediogoldprize(0);
        //阅读
        await readbook();
        $.log(`\n============书旗小说极速版=============`)
        await jsqxssignin()
        //极速看书
            await jsreadbook();
        //极速视频
             await jsvediogoldprize();
             $.log(`\n============书旗小说&极速版=============`)
        //收集阅读金币
        await receivecoin();
        //个人信息
        await userinfo();


    }
}
function sqxssignin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";

        const request = {
            url: url,
            headers: sqxssigninhd,
            body: sqxssigninbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("【书旗签到】失败");
                    await $.wait(1000);                    
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                         $.log("【书旗签到】成功，"+result.copyWriting);
                        await $.wait(1000);
                    }
                     else {                        
                            $.log("【书旗签到】失败," + result.message );
                            await $.wait(1000);              
                           //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsqxssignin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";

        const request = {
            url: url,
            headers: jssqxssigninhd,
            body: jssqxssigninbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("【书旗签到】失败");
                    await $.wait(1000);                    
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                         $.log("【书旗签到】成功，"+result.copyWriting);
                        await $.wait(1000);
                    }
                     else {                        
                            $.log("【书旗签到】失败," + result.message );
                            await $.wait(1000);              
                           //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function readbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";

        const request = {
            url: url,
            headers: sqxsckhd[0],
            body: sqxsckbd[0]
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("阅读请求失败,再次尝试阅读");
                    await $.wait(1000);
                    await readbook();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        ReadTimes++;
                        $.log("【阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                        await $.wait(1000);
                        await readbook();
                    } else {

                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【阅读任务】阅读失败，" + result.message + ",再次尝试阅读");
                            await $.wait(1000);
                            await readbook();
                        } else
                            $.log("【阅读任务】阅读失败，" + result.message);

                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function receivecoin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";

        const request = {
            url: url,
            headers: receivecoinckhd,
            body: receivecoinckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("收集阅读金币请求失败,再次尝试收集阅读金币");
                    await $.wait(1000);
                    await receivecoin();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {

                        $.log("【收集金币】收集阅读金币成功");

                    } else {
                        $.log("【收集金币】收集阅读金币失败," + result.message);
                        //$.log(data);
                    }
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function vediogoldprize(j) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: vediogoldprizehd,
            body: vediogoldprizebd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("视频金币请求失败,再次尝试视频金币");
                    await $.wait(1000);
                    await vediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        j++;
                        $.log("【视频金币】观看第" + j + "个视频成功，获得250金币，等待30s观看下一个视频");
                        vediogold += 250;
                        await $.wait(30000);
                        await vediogoldprize(j);
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【视频金币】观看失败，" + result.message + ",再次尝试视频金币");
                            await $.wait(30000);
                            await vediogoldprize(j);
                        } else
                            $.log("【视频金币】观看失败," + result.message);
                        //$.log(data);

                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function vediodrawprize(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";

        const request = {
            url: url,
            headers: vediodrawprizeckhd,
            body: vediodrawprizeckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("视频抽奖请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await vediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        k++;
                        $.log("【视频抽奖】观看第" + k + "个视频成功，获得一次抽奖机会");
                        await $.wait(1000);
                        await draw(k);
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【视频抽奖】观看失败，" + result.message + ",再次尝试视频抽奖");
                            await $.wait(1000);
                            await vediodrawprize(k);
                        } else
                            $.log("【视频抽奖】观看失败," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function draw(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";

        const request = {
            url: url,
            headers: drawckhd,
            body: drawckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("抽奖任务请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await draw();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        $.log("【抽奖任务】抽奖成功，获得" + result.data.prizeList[0].prizeName);
                        drawgold += parseInt(result.data.prizeList[0].prizeName);
                        await $.wait(1000);
                        await vediodrawprize(k);
                    } else {
                        $.log("【抽奖任务】抽奖失败," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function userinfo() {
    return new Promise((resolve, reject) => {
        const request = {
            url: userurl,
            headers: {},
            body: ""
        };

        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("用户信息请求失败,再次尝试用户信息请求");
                    await $.wait(1000);
                    await userinfo();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {
                        // $.log("【阅读任务】本次共获得" + ReadTimes * 3 + "金币");
                        // $.log("【视频任务】本次共获得" + vediogold + "金币");
                        // $.log("【抽奖任务】本次共获得" + drawgold + "金币");
                        $.log("【金币总数】" + result.data.gold);
                        $.log("【总计收益】" + result.data.income + "元");
                    } else {
                        $.log("【金币总数】数据异常," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsreadbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery";

        const request = {
            url: url,
            headers: jssqxsckhd,
            body: jssqxsckbd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("极速阅读请求失败,再次尝试阅读");
                    await $.wait(1000);
                    await jsreadbook();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.data.awardStatus == 1) {
                        ReadTimes++;
                        $.log("【极速阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                        await $.wait(1000);
                        await jsreadbook();
                    } else {

                        if (result.data.awardStatus == null) {
                            $.log("【极速阅读任务】阅读失败，领取达到每日上限，请明天再来");
                            await $.wait(1000);
                            //await jsreadbook();
                        } else
                            $.log("【极速阅读任务】阅读失败，" + result.message);
                        //await jsreadbook();
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}
function jsvediogoldprize() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: jsvediogoldprizehd,
            body: jsvediogoldprizebd
        };
        $.post(request, async (error, request, data) => {
            try {
                if (error) {
                    $.log("极速视频金币请求失败,再次尝试视频金币");
                    await $.wait(1000);
                    await jsvediogoldprize();
                } else {
                    const result = JSON.parse(data)
                    //$.log(data);
                    if (result.status == 200) {
                        $.log("【极速视频金币】观看视频成功,"+result.data.awardMessage+",等待30s观看下一个");
                        vediogold += 250;
                        await $.wait(30000);
                        await jsvediogoldprize();
                    } else {
                        if (result.message != '领取达到每日上限，请明天再来') {
                            $.log("【极速视频金币】观看失败，" + result.message + ",再次尝试视频金币");
                            await $.wait(30000);
                            await jsvediogoldprize();
                        } else
                            $.log("【极速视频金币】观看失败," + result.message);
                        //$.log(data);

                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}



