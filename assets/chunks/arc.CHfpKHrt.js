import{w as ln,c as V}from"./path.CbwjOpE9.js";import{aT as an,aU as Z,aV as b,aW as rn,aX as y,T as on,aY as z,aZ as _,a_ as un,a$ as t,b0 as sn,b1 as tn,b2 as fn}from"../app.D6Eb0BTO.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,E,q,v,A,W,a){var I=E-l,i=q-h,n=W-v,m=a-A,r=m*I-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*I,h+r*i]}function J(l,h,E,q,v,A,W){var a=l-E,I=h-q,i=(W?A:-A)/z(a*a+I*I),n=i*I,m=-i*a,r=l+n,s=h+m,f=E+n,c=q+m,X=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,O=(g<0?-1:1)*z(fn(0,T*T*R-P*P)),S=(P*g-p*O)/R,U=(-P*p-g*O)/R,w=(P*g+p*O)/R,d=(-P*p+g*O)/R,x=S-X,e=U-o,u=w-X,Y=d-o;return x*x+e*e>u*u+Y*Y&&(S=w,U=d),{cx:S,cy:U,x01:-n,y01:-m,x11:S*(v/T-1),y11:U*(v/T-1)}}function vn(){var l=cn,h=yn,E=V(0),q=null,v=gn,A=mn,W=pn,a=null,I=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,X=un(c-f),o=c>f;if(a||(a=n=I()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(X>on-y)a.moveTo(s*Z(f),s*b(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*Z(c),r*b(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=X,O=X,S=W.apply(this,arguments)/2,U=S>y&&(q?+q.apply(this,arguments):z(r*r+s*s)),w=_(un(s-r)/2,+E.apply(this,arguments)),d=w,x=w,e,u;if(U>y){var Y=sn(U/r*b(S)),B=sn(U/s*b(S));(P-=Y*2)>y?(Y*=o?1:-1,R+=Y,T-=Y):(P=0,R=T=(f+c)/2),(O-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(O=0,p=g=(f+c)/2)}var $=s*Z(p),j=s*b(p),C=r*Z(T),F=r*b(T);if(w>y){var G=s*Z(g),H=s*b(g),K=r*Z(R),L=r*b(R),D;if(X<an)if(D=dn($,j,K,L,G,H,C,F)){var M=$-D[0],N=j-D[1],Q=G-D[0],k=H-D[1],nn=1/b(tn((M*Q+N*k)/(z(M*M+N*N)*z(Q*Q+k*k)))/2),en=z(D[0]*D[0]+D[1]*D[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}O>y?x>y?(e=J(K,L,$,j,s,x,o),u=J(G,H,C,F,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo($,j),a.arc(0,0,s,p,g,!o)):a.moveTo($,j),!(r>y)||!(P>y)?a.lineTo(C,F):d>y?(e=J(C,F,G,H,r,-d,o),u=J($,j,K,L,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[Z(m)*n,b(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:V(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:V(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:V(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:V(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:V(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:V(+n),i):A},i.padAngle=function(n){return arguments.length?(W=typeof n=="function"?n:V(+n),i):W},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
