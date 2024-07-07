var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db_con.js');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
var cookie = require('cookie-parser');
const con = require('./db_con.js');
app.use(cookie());
app.get('/',function(req,res){
    if(req.session.uid>0){
        res.render('home');
    }
    else{
        req.session.msg="please login first to view home page";
        res.redirect('/login');
    }
});

app.get('/login', function(req,res){
    res.render('userlogin',{msg:req.session.msg});
});


app.post("/login_submit",function(req,res){
    var{email,password} = req.body;
    let sql = "select * from user where email='"+email+"' and password='"+password+"'";
    // console.log(sql);
    db.query(sql,function(err,result,fields){
        if(err)
        throw err;
    if(result.length==1){
        req.session.uid=result[0].userid;
        res.redirect('/');
    }
    else{
        req.session.msg="username password didnt match or user doesnt exist";
        res.redirect("/login");    //either we can redirect or render the userlogin form here
    }
    });
});

app.get('/listcourse',function(req,res){
    db.query("select * from course",function(err,result){
        if(err)
        throw err;
    res.render('listcourse',{result:result});
    });
});

app.get('/listcontent',function(req,res){
    db.query("select * from content",function(err,result){
        if(err)
        throw err;
    res.render('listcontent',{result:result});
    });
});

app.get('/listcourse_lang',function(req,res){
    db.query("select * from course_lang",function(err,result){
        if(err)
        throw err;
    res.render('listcourse_lang',{result:result});
    });
});

app.get('/listcourse_video',function(req,res){
    db.query("select * from course_video",function(err,result){
        if(err)
        throw err;
    res.render('listcourse_video',{result:result});
    });
});

app.get('/listuser',function(req,res){
    db.query("select * from user",function(err,result){
        if(err)
        throw err;
    res.render('listuser',{result:result});
    });
});

app.get('/listuser_course',function(req,res){
    db.query("select * from user_course",function(err,result){
        if(err)
        throw err;
    res.render('listuser_course',{result:result});
    });
});

app.get('/addcourse',function(req,res){
    db.query("select * from course",function(err,result){
        if(err)
        throw err;
    res.render('addcourse',{result:result});
    });
});

app.get('/addcontent', function(req,res){
    db.query("select * from content", function(err,result){
        if(err)
        throw err;
    res.render('addcontent',{result:result});
    }); 
}); 

app.get('/addcourse_lang', function(req,res){
    db.query("select * from course", function(err,result){
        if(err)
        throw err;
    res.render('addcourse_lang',{result:result});
    }); 
});  

app.get('/addcourse_video', function(req,res){
    db.query("select * from course", function(err,result){
        if(err)
        throw err;
    res.render('addcourse_video',{result:result});
    });
});  

app.get('/adduser', function(req,res){
    db.query("select * from user", function(err,result){
        if(err)
        throw err;
    res.render('adduser',{result:result});
    }); 
});  

app.get('/adduser_course', function(req,res){
    db.query("select * from user_course", function(err,result){
        if(err)
        throw err;
    res.render('adduser_course',{result:result});
    }); 
});  

app.post('/addcourse_submit',function(req,res){
    let{coursename,duration,price}=req.body;
    let sql = "insert into course(coursename,duration,price) values('"+coursename+"','"+duration+"',"+price+")";
    db.query(sql,function(err,result){
        if(err)
        throw err;
    if(result.insertId>0)
    res.redirect('/listcourse');
    });
});

app.post('/addcontent_submit', function(req, res) {
    let { title, contentdata } = req.body;
    // let formattedDatetime = new Date(datetime).toISOString().slice(0, 19).replace("T", " ");
    let sql = "insert into content (title, contentdata) values ('"+title+"','"+contentdata+"')";
    let values = [title, contentdata];
    db.query(sql, values, function(err, result) {
        if (err) {
            throw err;
        }
        if (result.insertId > 0) {
            res.redirect('/listcontent');
        }
    });
});

app.post('/addcourse_lang_submit',function(req,res){
    let{lang_name,lang_desc}=req.body;
    let sql = "insert into course_lang(lang_name,lang_desc) values('"+lang_name+"','"+lang_desc+"')";
    db.query(sql,function(err,result){
        if(err)
        throw err;
    if(result.insertId>0)
    res.redirect('/listcourse_lang');
    });
});

app.post('/addcourse_video_submit',function(req,res){
    let{video_title,video_url,coursename}=req.body;
    let sql = "insert into course_video(video_title,video_url,coursename) values('"+video_title+"','"+video_url+"','"+coursename+"')";
    db.query(sql,function(err,result){
        if(err)
        throw err;
    if(result.insertId>0)
    res.redirect('/listcourse_video');
    });
});

app.post('/adduser_submit',function(req,res){
    let{name,email,password,dob,dor}=req.body;
    let sql = "insert into user(name,email,password,dob,dor) values('"+name+"','"+email+"','"+password+"','"+dob+"','"+dor+"')";
    db.query(sql,function(err,result){
        if(err)
        throw err;
    if(result.insertId>0)
    res.redirect('/listuser');
    });
});

app.post('/adduser_course_submit',function(req,res){
    let{userid,courseid,startdate,enddate}=req.body;
    let sql = "insert into user_course(userid,courseid,startdate,enddate) values("+userid+","+courseid+",'"+startdate+"','"+enddate+"')";
    db.query(sql,function(err,result){
        if(err)
        throw err;
    if(result.insertId>0)
    res.redirect('/listuser_course');
    });
});

app.get('/delcourse',function(req,res){
    let courseid = req.query['id'];
    db.query("delete from course where courseid="+courseid,function(err,result){
        if(err)
        throw err;
    res.redirect('/listcourse');
    });
});

app.get('/delcontent',function(req,res){
    let contentid = req.query['id'];
    db.query("delete from content where contentid="+contentid,function(err,result){
        if(err)
        throw err;
    res.redirect('/listcontent');
    });
});

app.get('/delcourse_lang',function(req,res){
    let langid = req.query['id'];
    db.query("delete from course_lang where langid="+langid,function(err,result){
        if(err)
        throw err;
    res.redirect('/listcourse_lang');
    });
});

app.get('/delcourse_video',function(req,res){
    let courseid = req.query['id'];
    db.query("delete from course_video where courseid="+courseid,function(err,result){
        if(err)
        throw err;
    res.redirect('/listcourse_video');
    });
});

app.get('/deluser',function(req,res){
    let userid = req.query['id'];
    db.query("delete from user where userid="+userid,function(err,result){
        if(err)
        throw err;
    res.redirect('/listuser');
    });
});

app.get('/deluser_course', function(req, res) {
    let courseid = req.query['id'];
    db.query("DELETE FROM user_course WHERE courseid = ?", [courseid], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listuser_course');
    });
});


app.get('/editcourse',function(req,res){
    let courseid = req.query['id'];
    db.query("select * from course where courseid="+courseid,function(err,result){
        if(err)
        throw err;
    res.render('editcourse',{result:result});
    });
});

app.get('/editcontent',function(req,res){
    let contentid = req.query['id'];
    db.query("select * from content where contentid="+contentid,function(err,result){
        if(err)
        throw err;
    res.render('editcontent',{result:result});
    });
});


app.get('/editcourse_lang',function(req,res){
    let langid = req.query['id'];
    db.query("select * from course_lang where langid="+langid,function(err,result){
        if(err)
        throw err;
    res.render('editcourse_lang',{result:result});
    });
});

app.get('/editcourse_video',function(req,res){
    let cvid = req.query['id'];
    db.query("select * from course_video where cvid="+cvid,function(err,result){
        if(err)
        throw err;
    res.render('editcourse_video',{result:result});
    });
});

app.get('/edituser',function(req,res){
    let userid = req.query['id'];
    db.query("select * from user where userid="+userid,function(err,resultuser){
        if(err)
        throw err;
    res.render('edituser',{resultuser:resultuser});
    });
});

app.get('/edituser_course',function(req,res){
    let ucid = req.query['id'];
    db.query("select * from user_course where ucid="+ucid,function(err,result){
        if(err)
        throw err;
    res.render('edituser_course',{result:result});
    });
});

app.post('/edituser_submit',function(req,res){
    let{name,email,password,userid} = req.body;
    let updateuserSql = "update user set name='"+name+"',email='"+email+"',password='"+password+"' where userid="+userid;
    console.log(updateuserSql);
    db.query(updateuserSql,function(err,result){
        if(err)
        throw err;
    res.redirect('/listuser');
    });
});

app.post('/editcourse_submit',function(req,res){
    let{coursename,duration,price,courseid} = req.body;
    let updatecourseSql = "update course set coursename='"+coursename+"',duration='"+duration+"',price="+price+" where courseid="+courseid;
    console.log(updatecourseSql);
    db.query(updatecourseSql,function(err,result){
        if(err)
        throw err;
    res.redirect('/listcourse');
    });
});

app.post('/editcontent_submit',function(req,res){
    let{contentdata,title,contentid} = req.body;
    let updatecontentSql = "update content set contentdata='"+contentdata+"',title='"+title+"' where contentid="+contentid;
    console.log(updatecontentSql);
    db.query(updatecontentSql,function(err,result){
        if(err)
        throw err;
    res.redirect('/listcontent');
    });
});

app.post('/editcourse_lang_submit', function(req, res) {
    const { langid, lang_name , lang_desc } = req.body;
    if (isNaN(langid)) {
        res.status(400).send('Invalid langid');
        return;
    }
    console.log(langid + " " + lang_name + " " + lang_desc);
    const updatecourse_langSql = "UPDATE course_lang SET lang_name = ? , lang_desc = ? WHERE langid = ?";
    const values = [lang_name, lang_desc, langid];
    console.log(updatecourse_langSql);
    db.query(updatecourse_langSql, values, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listcourse_lang');
    });
});

app.post('/editcourse_video_submit', function(req, res) {
    const { cvid, video_title, video_url } = req.body;
    if (isNaN(cvid)) {
        res.status(400).send('Invalid cvid');
        return;
    }
    console.log(cvid + " " + video_title + " " + video_url);
    const updatecourse_videoSql = "UPDATE course_video SET video_title = ?, video_url = ? WHERE cvid = ?";
    const values = [video_title, video_url, cvid];
    console.log(updatecourse_videoSql);
    db.query(updatecourse_videoSql, values, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listcourse_video');
    });
});

app.post('/edituser_course_submit', function(req, res) {
    const { startdate, enddate, ucid } = req.body; // Extract ucid from the request body
    if (isNaN(ucid)) {
        res.status(400).send('Invalid ucid');
        return;
    }
    console.log(ucid + " " + startdate + " " + enddate);
    const updateuser_courseSql = "UPDATE user_course SET startdate = ?, enddate = ? WHERE ucid = ?";
    const values = [startdate, enddate, ucid];
    console.log(updateuser_courseSql);
    db.query(updateuser_courseSql, values, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listuser_course');
    });
});


app.listen(7000,function(){
    console.log("server running at port no 7000");
});