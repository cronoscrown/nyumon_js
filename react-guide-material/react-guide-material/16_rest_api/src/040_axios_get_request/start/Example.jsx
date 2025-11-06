import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("データ取得開始...");
    
    axios.get("http://localhost:3003/user") // 'users' → 'user' に修正
      .then((response) => {
        console.log("取得したデータ:", response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("エラー:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  if (!users || users.length === 0) return <div>データがありません</div>;

  return (
    <div>
      <h2>ユーザー一覧 ({users.length}件)</h2>
      {users.map(user => {
        return (
          <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{user.username}</h3>
            <p>年齢: {user.age}</p>
            <p>趣味: {user.hobbies ? user.hobbies.join(", ") : "なし"}</p>
            <p>プレミアム: {user.premiumAccount ? "Yes" : "No"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
