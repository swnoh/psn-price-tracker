"""empty message

Revision ID: 225033f05a13
Revises: 
Create Date: 2018-07-26 21:50:03.281818

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '225033f05a13'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('psn_category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category_url', sa.String(), nullable=True),
    sa.Column('category_name', sa.String(), nullable=True),
    sa.Column('game_id', sa.JSON(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('psn_category_quick',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category_url', sa.String(), nullable=True),
    sa.Column('category_name', sa.String(), nullable=True),
    sa.Column('gameItem', sa.JSON(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('psn_game',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.String(), nullable=True),
    sa.Column('game_title', sa.String(), nullable=True),
    sa.Column('game_type', sa.String(), nullable=True),
    sa.Column('game_url', sa.String(), nullable=True),
    sa.Column('thumb_img_url', sa.String(), nullable=True),
    sa.Column('api_url', sa.String(), nullable=True),
    sa.Column('regular_price', sa.String(), nullable=True),
    sa.Column('display_price', sa.String(), nullable=True),
    sa.Column('discount_message', sa.String(), nullable=True),
    sa.Column('plus_price', sa.String(), nullable=True),
    sa.Column('plus_exclusive_price', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('game_id')
    )
    op.create_table('psn_price_history',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.String(), nullable=True),
    sa.Column('game_title', sa.String(), nullable=True),
    sa.Column('chartPrices', postgresql.JSON(astext_type=sa.Text()), nullable=True),
    sa.Column('chartBonusPrices', postgresql.JSON(astext_type=sa.Text()), nullable=True),
    sa.Column('highest_price', sa.Float(), nullable=True),
    sa.Column('lowest_price', sa.Float(), nullable=True),
    sa.Column('plus_lowest_price', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('game_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('psn_price_history')
    op.drop_table('psn_game')
    op.drop_table('psn_category_quick')
    op.drop_table('psn_category')
    # ### end Alembic commands ###
