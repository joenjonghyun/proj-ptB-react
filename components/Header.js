//홈화면임
export function Header() {
    return (
        <div>
        <hr/>
            <nav role="navigation">
                <li><a>USER</a>
                    <ul>
                        <li ><a href='/user/login' aria-label="submenu">로그인</a></li>
                        <li ><a href='/user/register' aria-label="submenu">회원가입</a></li>
                    </ul>
                </li>
            </nav>
            <hr/>
            </div>
    )
}