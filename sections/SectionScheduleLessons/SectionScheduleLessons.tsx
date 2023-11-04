'use client';
import { ScheduleLesson, Container } from '@/components/theme';
import { SectionScheduleLessonsProps } from './SectionScheduleLessons.type';
import { useLoadMorePosts } from '@/hooks/useLoadMorePosts';

function SectionScheduleLessons({
  heading,
  posts,
  next_page,
  post_number,
}: SectionScheduleLessonsProps) {
  const { loading, postList, nextPage, onLoadMore } = useLoadMorePosts({
    apiUrl: 'lesson-schedules',
    posts,
    next_page: next_page,
    post_number: post_number,
  });

  return (
    <section className="section-schedule-lessons">
      <Container className="section-schedule-lessons__container">
        <h2 className="section-schedule-lessons__heading ta-c">{heading}</h2>
        {postList && postList.length ? (
          <div className="section-schedule-lessons__body">
            {postList.map((post) => (
              <ScheduleLesson key={post._id} {...post} />
            ))}
          </div>
        ) : (
          <h6 className="ta-c">Нет предстоящих уроков</h6>
        )}
        {nextPage ? (
          <div className="section-schedule-lessons__action ta-c">
            <button
              className="load-more"
              disabled={loading}
              onClick={onLoadMore}
            >
              {loading ? 'Загрузка...' : 'Загрузить больше'}
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionScheduleLessons;
