import { initializeApp } from "firebase/app";
import config from "../../firebase.json";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const app = initializeApp(config);

const Auth = getAuth(app);
const storage = getStorage(app);

export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(Auth, email, password);
  return user;
};

export const signup = async ({ email, password, name, photoUrl }) => {
  const { user } = await createUserWithEmailAndPassword(Auth, email, password);
  //   const storageUrl = photoUrl.startsWith("https")
  //     ? photoUrl
  //     : await uploadImage(photoUrl);
  await updateProfile(user, {
    displayName: name,
    // photoURL: storageUrl
  });

  return user;
};

const uploadImage = async (uri) => {
  try {
    // 이미지 파일을 Blob으로 가져오기
    const response = await fetch(uri);
    const blob = await response.blob();

    const user = getAuth().currentUser; // Firebase 인증 정보 가져오기
    const storageRef = ref(getStorage(), `profile/${user.uid}/photo.png`); // Firebase Storage 참조 생성
    const snapshot = await uploadBytes(storageRef, blob, {
      contentType: "image/png",
    }); // 업로드
    const downloadURL = await getDownloadURL(snapshot.ref); // 다운로드 URL 가져오기

    blob.close();
    return downloadURL;
  } catch (e) {
    console.error("Error uploading image: ", error);
    throw error;
  }
};
