import React, { useEffect, useState } from 'react';
import { hello, Calculator } from 'js/demo';
import Di from '@/Di';
import { useQuery } from '@tanstack/react-query';
import { ICategories, MyService, fetchCategories } from '@/services/MyService';

// 일반 자바스크립트 코드를 TypeScript로 변환할 때는 타입을 지정해주어야 한다.
let calc = new Calculator(123, 65);
console.log(calc.add(1, 2));
console.log(hello('world'));

const myService = new MyService('https://api.vivabm.com');

const Demo: React.FC = () => {
  //--> (1) axios로 API 호출을 하면 데이터를 받아오기 전에 렌더링이 되기 때문에 초기값을 빈 배열로 설정한다.
  // const [dataList, setDataList] = useState<ICategories[]>([]);
  // useEffect(() => {
  //   const fetchCodes = async () => {
  //     try {
  //       const data = await myService.getCodes();
  //       setDataList(data);
  //     } catch (error) {
  //       console.error('Failed to fetch codes:', error);
  //     }
  //   };
  //   fetchCodes();
  // }, []);

  // --> (2) useQuery를 사용하면 데이터를 받아오기 전에 렌더링이 되지 않는다.
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<ICategories[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <>
      <div className="container-fluid h-screen bg-rose-50 p-8">
        <div className="row row-cols-2">
          {/* Demo Start */}

          <div className="card-group">
            <div className="card">
              <img
                src="assets/robot.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body text-primary my-2">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  tempore perferendis cum, nisi eum eaque quo dolores minima
                  omnis incidunt possimus itaque earum quisquam. Tempora, ad.
                  Fugiat iusto quae rem?
                </p>
              </div>
              <div className="card-footer bg-transparent">Footer</div>
            </div>
          </div>

          <div className="card border-primary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-primary">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                consequuntur excepturi tenetur repudiandae ut. Ea totam
                laboriosam voluptates pariatur consequuntur neque similique
                sequi in, rerum iure esse tenetur, aliquam fuga.
              </p>
            </div>
            <div className="card-footer bg-transparent">Footer</div>
          </div>

          <div>
            {/* Modal */}
            <button
              type="button"
              className="btn btn-success"
              data-bs-target="#demoModal"
              data-bs-toggle="modal">
              Open Modal
            </button>
            <div
              className="modal fade"
              tabIndex={-1}
              id="demoModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="demoModalLabel">
                      Modal Title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt aliquid saepe placeat id quibusdam voluptates
                      sint, sunt sequi dolorum provident mollitia
                      exercitationem, ab non harum dolore excepturi voluptatem.
                      Libero, possimus.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal">
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary">
                      Save Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="formFile">File</label>
            <input
              className="form-control form-control-lg"
              type="file"
              id="formFile"
              typeof="file"
            />
          </div>
          <div>
            <label htmlFor="colorInput">Color picker</label>
            <input
              type="color"
              className="form-control form-control-color"
              id="colorInput"
              value="#563d7c"
              title="Choose your color"
            />
          </div>
          <div>
            <label
              htmlFor="inputPassword5"
              className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
            />
            <div
              id="passwordHelpBlock"
              className="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <div>
            <label htmlFor="formInput">Email</label>
            <input
              id="formInput"
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <h2>Categories</h2>
            {/* <ul>
              {dataList.map((data) => (
                <li key={data.id}>{data.name}</li>
              ))}
            </ul> */}
          </div>

          <div>
            <h2>Categories</h2>
            <ul>
              {categories?.map((category) => (
                <li key={category.id}>
                  {category.id}. {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
