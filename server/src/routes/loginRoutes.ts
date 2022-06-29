import { raw } from 'body-parser';
import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
    body:{[Key:string]:string|undefined};
}

function requireAuth(req:Request,res:Response,next:NextFunction){
if (req.session && req.session.loggedIn){
    next();
    return;
}
res.status(403);
res.send('Not permited')
}

const router = Router();

router.get('/login',(req,res)=>{
   res.send(`
   <form method="POST">
   <div>
   <label>Email</labal>
   <input name = "email"/>
   </div>
   <div>
   <label>Password</labal>
   <input name = "password" type ="password"/>
   </div>
   <button>Submit</button>
   </form>
   `);
});

router.post('/login',(req:RequestWithBody,res:Response)=>{
    const {email,password}=req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
      } else {
        res.send('Invalid email or password');
      }

});

router.get('/',(req:RequestWithBody,res:Response)=>{
    if(req.session && req.session.loggedIn){
        res.send(`
        <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
        </div>`);
    }else {
        res.send(`
        <div>
        <div>You are logged in</div>
        <a href="/login">Login</a>
        </div>`);
    }
});

router.get('/logout',(req:Request,res:Response)=>{
    req.session = undefined;
    res.redirect('/')
});

router.get('/protected',requireAuth,(req:Request,res:Response)=>{
res.send(
    'welcome to protected route,logged in user'
)
});

export { router};