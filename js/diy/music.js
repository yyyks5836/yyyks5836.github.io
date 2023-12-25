const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
lrcType: 3 ,
    audio: [
	{
        name: '红昭愿',
        artist: ' 音阙诗听',
        url: 'https://m701.music.126.net/20231224222506/c8d3a1a96288a5b62184b0bc14e8ecd0/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481666980/ce44/16ac/7e54/004d523aa11440c15a2fb265404a2614.mp3',
        cover: 'http://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg?param=177y177',	
    lrc: 'https://cdn.jsdelivr.net/gh/yyyks5836/hexo-audio/红昭愿.lrc'
    },{
        name: '圣诞星',
        artist: ' 周杰伦',
        url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkSjYtdG1qcUQxRHFXTjhkQTVmaUM0QnBtN01rb1pYY0lHYlVWRmtLMGQwMHc.flac',
        cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001ln9YB420a7b_1.jpg?max_age=2592000',	
         lrc: 'https://cdn.jsdelivr.net/gh/yyyks5836/hexo-audio/圣诞星.lrc' }, 
	]
});

