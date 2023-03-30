import { useEffect, useState } from 'react';

type pagebationProps = {
  totalPage: number;
};

export const Pagenation = ({ totalPage }: pagebationProps) => {
  const [first, setFirst] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  // let first = 0;
  // let end = 10;
  // let this_page = 1;
  // console.log('시작점', first, end, page);
  // const pageItems: number[] = Array(pageEA).fill(0);
  const [pageItems, setPageItems] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const prevClick = () => {
    console.log('prev 실행 됨');
    if (first === 0) {
      return; // first가 0일 때는 작동하지 않음
    }
    setPage(page - 1);
    // this_page--;
    setFirst(Math.max(0, first - 10));
    setEnd(Math.max(0, first - 10) + 10);
    // first = Math.max(0, first - 10); // first에 -10을 주되, 0보다 작아지지 않도록 조정
    // end -= 10; // end에 -10을 주기
    // prenex();
    // console.log('prev', first, end, page);
  };
  const nextClick = () => {
    // console.log('next 실행 됨');
    if (page >= totalPage) {
      return; // 마지막 페이지인 경우, 넘어가지 않음
    }
    setPage(page + 1);
    // this_page++;
    setFirst(Math.min(totalPage, end + 10) - 10);
    setEnd(Math.min(totalPage, end + 10));
    // first += 10; // first에 +10을 주기
    // end = Math.min(pageEA, end + 10); // end에 +10을 주되, 게시물 수를 넘어가지 않도록 조정
    // prenex();
    // console.log('next', first, end, page);
  };
  // 버튼 누르고 first와 end가 모두 바뀐 이후에 prenex가 발동해서 pageItems가 바뀌게 된다.
  useEffect(() => {
    prenex();
  }, [first && end]);
  const prenex = () => {
    const arr: number[] = [];
    for (let i = first; i < end; i++) {
      arr.push(i + 1);
    }
    setPageItems(arr);
  };
  // console.log(pageItems);
  // console.log('끝', first, end, page);
  return (
    <article className='flex justify-center m-auto p-auto'>
      <button
        id='prev-button'
        onClick={() => prevClick()}
        className='box border-2 border-[#6773BB] rounded-md bg-[#6773BB] text-[#fefefe] text-lg w-16 h-12 my-4 ml-4 mr-3'
      >
        prev
      </button>
      <div className='flex justify-around'>
        {pageItems.map((item, index) => (
          // <div className='text-center m-auto px-1 text-lg'>{item}</div>
          // <input type='submit' value={item} />
          <button
            key={index}
            className='my-4 mx-1 px-1 text-lg h-12 w-12 border-2 rounded-sm border-[#6773BB] text-[#6773BB]'
          >
            {item}
          </button>
        ))}
      </div>
      <button
        id='next-button'
        onClick={() => nextClick()}
        className='box border-2 border-[#6773BB] rounded-md bg-[#6773BB] text-[#fefefe] text-lg w-16 h-12 my-4 mr-4 ml-4'
      >
        next
      </button>
    </article>
  );
};