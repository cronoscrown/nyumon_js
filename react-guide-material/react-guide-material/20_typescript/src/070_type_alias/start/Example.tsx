// POINT 型エイリアスについて学ぼう
// TypeScriptでは、type文を用いて型に別名を付けることができる。これを 型エイリアス(type alias) と呼ぶ

const Example = () => {
  // 練習用
  type User = {
    name: string,
    age: number
  }
  const user: User = { name: 'Taro', age: 10 }

  type UserName = string;
  type UserAge = number;
  type UserGender = 'man'|'woman'|'other';

  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender
  }

  const userProfile: UserProfile = { name: 'Taro', age: 10, gender: 'man' };
  return (
    <>
    <div>{`name: ${user.name}, age: ${user.age}`}</div>
    <div>{`name: ${userProfile.name}, age: ${userProfile.age}, gender: ${userProfile.gender}`}</div>
    </>
  );
};

export default Example;
