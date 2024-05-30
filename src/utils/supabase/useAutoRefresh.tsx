import React from 'react';
import RN from 'react-native';
import { supabaseClient } from './supabase-client';

/**
 * 이 코드는 Supabase 인증 시스템에서 사용자 세션 관리를 자동화하는 역할을 한다.
 * 앱이 포그라운드에서 실행 중일 때, Supabase Auth는 사용자 세션을 지속적으로 갱신한다.
 * 이렇게 하면 사용자가 앱을 사용하는 동안 세션이 유지되고, 인증 상태가 지속적으로 유지된다.
 *
 * 이 코드를 추가하면 다음과 같은 이점이 있다:
 *
 * 1. 사용자의 세션이 만료되거나 종료되더라도, onAuthStateChange 이벤트를 통해 이를 감지할 수 있다.
 * - 세션이 갱신되면 TOKEN_REFRESHED 이벤트가 발생한다.
 * - 세션이 종료되면 SIGNED_OUT 이벤트가 발생한다.
 * 2. 앱이 포그라운드에 있는 동안에는 사용자 세션이 자동으로 유지되므로, 사용자는 별도의 로그인 과정 없이 앱을 계속해서 사용할 수 있다.
 *
 * 주의할 점은 이 코드는 한 번만 등록되어야 한다는 것이다.
 * 여러 곳에서 이 코드를 중복해서 등록하면 불필요한 리소스 소모와 잠재적인 문제가 발생할 수 있다.
 * 따라서 앱의 적절한 위치에서 한 번만 이 코드를 등록하고, 사용자 세션 관리를 자동화하는 것이 좋다.
 * 이를 통해 사용자는 원활한 인증 경험을 얻을 수 있고, 개발자는 세션 관리에 대한 부담을 줄일 수 있다.
 */
export const useAutoRefresh = () => {
  React.useEffect(() => {
    const subscription = RN.AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        supabaseClient.auth.startAutoRefresh();
      } else {
        supabaseClient.auth.stopAutoRefresh();
      }
    });

    return () => subscription.remove();
  }, []);
};
