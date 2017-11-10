/**
 * Created by yunrui001 on 2017-09-21.
 */
// 仅限 Windows 系统
const { spawn,exec } = require('child_process');
const bat = spawn('ping', ['localhost']);
exec('ping localhost',function(error,stdout,stderr){
    console.log(`ping ${stdout}`);
})
bat.stdout.on('data', (data) => {
    console.log(`${data.toString()}`);
});

bat.stderr.on('data', (data) => {
    console.log(`${data.toString()}`);
});

bat.on('exit', (code) => {
    console.log(`子进程退出码：${code}`);
});