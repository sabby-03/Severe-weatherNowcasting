const U='an_users',S='an_session';
const users=()=>JSON.parse(localStorage.getItem(U)||'[{"name":"Demo Officer","email":"admin@attest.in","pass":"demo123","role":"Disaster Authority"}]');
function login(e,p){const u=users().find(x=>x.email===e&&x.pass===p);if(!u)return false;localStorage.setItem(S,JSON.stringify(u));return true}
function register(u){const l=users();if(l.some(x=>x.email===u.email))return false;l.push(u);localStorage.setItem(U,JSON.stringify(l));localStorage.setItem(S,JSON.stringify(u));return true}
const me=()=>JSON.parse(localStorage.getItem(S)||'null');
function logout(){localStorage.removeItem(S);location.href='login.html'}
