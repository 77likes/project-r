import { useState } from "react"
import { isSuccessReinforced } from '../business/isSuccessReinforced'

const defaultItem = {
  grade: 'normal',
  type: 'weapon',
  reinforced: 0,
  isLive: true,
}

function Test() {
  const [item, setItem] = useState({...defaultItem})

  const onClickReinforce = () => {
    const result = isSuccessReinforced(item);
    const futureItem = result ? { reinforced : ++item.reinforced } : { isLive: false };
    setItem({
      ...item,
      ...futureItem
    })
  }

  const onClickResetItem = () => {
    setItem({...defaultItem});
  }

  return <div>
    <strong>아이템 강화 테스트</strong>

    {
      item.isLive ? 
    
      <div>
        <div>아이템 이미지</div>
        <div>아이템 강화도 {item.reinforced}</div>
        <button onClick={onClickReinforce}>강화하기</button>
      </div>
    
    :

      <div>
        <div>"아이템이 파괴되었습니다."</div>
        <button onClick={onClickResetItem}>다시하기</button>
      </div>
    }
  </div>
}


export default Test;