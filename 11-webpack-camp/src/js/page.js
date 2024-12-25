export const pages = {
    homes: () => `
        <div class="p-4 w-full h-screen flex flex-col justify-center items-center">
            <h1 class="text-2xl">홈페이지</h1>
            <p>이곳은 홈페이지 입니다.</p>
            <div class="mt-4 flex gap-4">
                <a href="/codes" data-link class="btn btn-primary">코드 페이지로 이동</a>
                <a href="/camps" data-link class="btn btn-success">캠프 페이지로 이동</a>
            </div>
        </div>
    `,
    codes: () => `
        <div class="p-4 w-full h-screen flex flex-col justify-center items-center">
            <h1 class="text-2xl">코드 페이지</h1>
            <div class="mt-4 flex gap-4">
                <a href="/" data-link class="btn btn-primary">홈으로 이동</a>
                <a href="/camps" data-link class="btn btn-success">캠프 페이지로 이동</a>
            </div>
        </div>
    `,
    camps: () => `
         <div class="p-4 w-full h-screen flex flex-col justify-center items-center">
            <h1 class="text-2xl">캠프 페이지</h1>
            <div class="mt-4 flex gap-4">
                <a href="/" data-link class="btn btn-primary">홈으로 이동</a>
                <a href="/codes" data-link class="btn btn-success">코드 페이지로 이동</a>
            </div>
        </div>
    `
};
