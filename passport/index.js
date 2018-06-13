import passport from "passport";
import LocalStrategy from "./localStrategy";
import User from "../db/models/User";

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===');
	console.log(user); // the whole raw user object!
	console.log('---------');
	done(null, { _id: user._id });
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'local.email',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======');
			console.log(user);
			console.log('--------------');
			done(null, user);
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy);

export default passport;