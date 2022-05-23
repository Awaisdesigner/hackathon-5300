import { auth, db } from "../../config/Firebase.js";

    
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";

export const dologin = (user, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        // firebase login
        const userCredential = await auth.signInWithEmailAndPassword(
            user.email,
            user.password
        );
        var userData = userCredential.user;
        if (userData) {
            dispatch({
                type: LOGIN,
                payload: userData,
            });
        }
    } catch (error) {
        console.log(error);

        
    } finally {
        setLoader(false);
    }
    // login details
};

export const doSignUp = (user, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        // firebase login
        // firestore - collect user add 
        const userCredential = await auth.createUserWithEmailAndPassword(
            user.email,
            user.password,
        );
        var userData = userCredential.user;
        let resValue = await db.collection("users").add({
            ...user,
            id: userData.id
        });

        if (userData) {
            dispatch({
                type: LOGIN,
                payload: userData,
            });
        }
    } catch (error) {
        console.log(error);

    } finally {
        setLoader(false);
    }
    // login details
};
export const doLogOut = (user, setLoader) => async (dispatch) => {
    try {
        await auth.signOut();
        alert("user logout");
        dispatch({
            type: LOGOUT,
        });
    }
    catch (e) {
        console.log(e);

    }
}



